import Appwrite from '@/components/technologies/Appwrite';
import Bun from '@/components/technologies/Bun';
import ExpressJs from '@/components/technologies/ExpressJs';
import Github from '@/components/technologies/Github';
import JavaScript from '@/components/technologies/JavaScript';
import MDXIcon from '@/components/technologies/MDXIcon';
import MongoDB from '@/components/technologies/MongoDB';
import Motion from '@/components/technologies/Motion';
import Netlify from '@/components/technologies/Netlify';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import Sanity from '@/components/technologies/Sanity';
import Shadcn from '@/components/technologies/Shadcn';
import SocketIo from '@/components/technologies/SocketIo';
import Solidity from '@/components/technologies/Solidity';
import TailwindCss from '@/components/technologies/TailwindCss';
import ThreeJs from '@/components/technologies/ThreeJs';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'PromptStack',
    description: 'AI Developer Assistant with RAG pipeline for precise code Q&A, documentation search, and automated commit analysis',
    image: '/project/promptstack.png',
    link: '#',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Appwrite', icon: <Appwrite key="appwrite" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
    ],
    github: 'https://github.com/LOGESHWAR123/promptstack',
    live: 'https://promptstack-oimu.vercel.app/',
    details: true,
    projectDetailsPageSlug: '#',
    isWorking: false,
  },
    {
     title: 'Web 3.0 Blockchain App',
    description:
      'A decentralized Web 3.0 application with Ethereum smart contracts, enabling secure on-chain transactions via a modern Next.js frontend',
    image: '/project/web3.png',
    link: '#',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
      { name: 'Solidity', icon: <Solidity key="solidity" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
    ],
    github: 'https://github.com/LOGESHWAR123/web-3.0-new',
    live: '#',
    details: true,
    projectDetailsPageSlug: '#',
    isWorking: false,
  },
  
];
