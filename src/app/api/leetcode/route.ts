export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get('username');

  if (!username) {
    return Response.json({ error: 'Username required' }, { status: 400 });
  }

  try {
    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Referer: 'https://leetcode.com',
      },
      body: JSON.stringify({
        query: `
          query getUserProfile($username: String!) {
            matchedUser(username: $username) {
              submissionCalendar
              submitStats: submitStatsGlobal {
                acSubmissionNum {
                  difficulty
                  count
                }
              }
              profile {
                ranking
              }
            }
            userContestRanking(username: $username) {
              rating
              globalRanking
              attendedContestsCount
              topPercentage
            }
          }
        `,
        variables: { username },
      }),
      cache: 'no-store',
    });

    const data = await response.json();

    return Response.json({
      ...data.data.matchedUser,
      contest: data.data.userContestRanking,
    });
  } catch (error) {
    return Response.json(
      { error: 'Failed to fetch LeetCode data' },
      { status: 500 }
    );
  }
}