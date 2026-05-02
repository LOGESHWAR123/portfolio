'use client';

import { githubConfig } from '@/config/Github';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import Container from '../common/Container';
import { Button } from '../ui/button';

const ActivityCalendar = dynamic(
  () => import('react-activity-calendar').then((mod) => mod.default),
  { ssr: false },
);

type ContributionItem = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type StatsType = {
  easy: number;
  medium: number;
  hard: number;
};

type ContestType = {
  rating?: number;
  globalRanking?: number;
  topPercentage?: number;
};

function mapCountToLevel(count: number): ContributionItem['level'] {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 10) return 3;
  return 4;
}

export default function LeetCode() {
  const [contributions, setContributions] = useState<ContributionItem[]>([]);
  const [stats, setStats] = useState<StatsType>({
    easy: 0,
    medium: 0,
    hard: 0,
  });
  const [contest, setContest] = useState<ContestType | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const { theme } = useTheme();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `/api/leetcode?username=${githubConfig.username}`
        );
        const data = await res.json();

        // 🔥 HEATMAP
        const calendar = JSON.parse(data.submissionCalendar);

        const today = new Date();
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(today.getFullYear() - 1);

        const arr: ContributionItem[] = [];

        Object.entries(calendar).forEach(([ts, count]) => {
          const date = new Date(Number(ts) * 1000);

          if (date >= oneYearAgo && date <= today) {
            arr.push({
              date: date.toISOString().split('T')[0],
              count : Number(count),
              level: mapCountToLevel(Number(count)),
            });
          }
        });

        arr.sort(
          (a, b) =>
            new Date(a.date).getTime() - new Date(b.date).getTime()
        );

        setContributions(arr);

        // 🔥 STATS
        const statsData = data?.submitStats?.acSubmissionNum;
        if (statsData) {
          setStats({
            easy:
              statsData.find((s: any) => s.difficulty === 'Easy')?.count || 0,
            medium:
              statsData.find((s: any) => s.difficulty === 'Medium')?.count || 0,
            hard:
              statsData.find((s: any) => s.difficulty === 'Hard')?.count || 0,
          });
        }

        // 🔥 CONTEST
        setContest(data?.contest || null);
      } catch (e) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const totalSolved = stats.easy + stats.medium + stats.hard;

  return (
    <Container className="mt-20">
      <div className="space-y-10">

        {/* HEADER */}
        <div>
          <h2 className="text-foreground text-2xl font-bold">
            {githubConfig.title}
          </h2>
          <p className="text-muted-foreground text-sm">
            <b>{githubConfig.username}</b>&apos;s {githubConfig.subtitle}
          </p>
        </div>

        {/* 🔥 HERO + STATS */}
        {!isLoading && !hasError && (
          <div className="space-y-6">

            {/* HERO */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 backdrop-blur-md">
              <p className="text-sm text-muted-foreground">
                Contest Performance
              </p>

              <div className="mt-2 flex items-end justify-between">
                <div>
                  <h1 className="text-4xl font-bold text-blue-400">
                    {contest?.rating
                      ? Math.round(contest.rating)
                      : 'N/A'}
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Global Rank #{contest?.globalRanking || 'N/A'}
                  </p>
                </div>

                {/* 🔥 REAL TOP % */}
                {contest?.topPercentage && (
                  <p className="mt-1 text-sm text-purple-400 font-medium">
                     Top {contest.topPercentage.toFixed(2)}%
                  </p>
                )}

                <div className="text-right">
                  <p className="text-sm text-muted-foreground">
                    Problems Solved
                  </p>
                  <p className="text-2xl font-bold text-white">
                    {totalSolved}
                  </p>
                </div>
              </div>
            </div>

            {/* 🔥 PROGRESS BARS */}
            <div className="grid gap-4 md:grid-cols-3">

              {[
                {
                  label: 'Easy',
                  value: stats.easy,
                  color: 'bg-green-500',
                },
                {
                  label: 'Medium',
                  value: stats.medium,
                  color: 'bg-yellow-500',
                },
                {
                  label: 'Hard',
                  value: stats.hard,
                  color: 'bg-red-500',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 p-4"
                >
                  <div className="mb-2 flex justify-between text-sm">
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                  </div>

                  <div className="h-2 w-full rounded bg-white/10">
                    <div
                      className={`h-2 rounded ${item.color}`}
                      style={{
                        width: `${
                          totalSolved
                            ? (item.value / totalSolved) * 100
                            : 0
                        }%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* LOADING */}
        {isLoading && (
          <div className="flex justify-center py-16">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-t-transparent"></div>
          </div>
        )}

        {/* ERROR */}
        {!isLoading && hasError && (
          <div className="text-center">
            <p>{githubConfig.errorState.title}</p>
            <Button asChild>
              <Link href={`https://leetcode.com/${githubConfig.username}`}>
                View Profile
              </Link>
            </Button>
          </div>
        )}

        {/* 🔥 HEATMAP */}
        {!isLoading && !hasError && contributions.length > 0 && (
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 backdrop-blur-md">
            <p className="mb-3 text-sm text-muted-foreground">
              Consistency over the last year
            </p>

            <ActivityCalendar
              data={contributions}
              blockSize={12}
              blockMargin={4}
              fontSize={githubConfig.fontSize}
              colorScheme={theme === 'dark' ? 'dark' : 'light'}
              maxLevel={githubConfig.maxLevel}
              hideTotalCount
              theme={githubConfig.theme}
              labels={{
                months: githubConfig.months,
                weekdays: githubConfig.weekdays,
                totalCount: githubConfig.totalCountLabel,
              }}
            />
          </div>
        )}
      </div>
    </Container>
  );
}