import Azure from '@/components/technologies/Azure';
import AzureAI from '@/components/technologies/AzureAI';
import BootStrap from '@/components/technologies/BootStrap';
import Bun from '@/components/technologies/Bun';
import CSS from '@/components/technologies/CSS';
import DotNet from '@/components/technologies/DotNet';
import ExpressJs from '@/components/technologies/ExpressJs';
import Figma from '@/components/technologies/Figma';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NestJs from '@/components/technologies/NestJs';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import Python from '@/components/technologies/Python';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    company: 'HCLTech',
    position: 'Senior Software Engineer',
    location: 'Chennai, India',
    image: '/company/hcltech.png',
    description: [
      'Implemented a real-time notification system by integrating Redis keyspace notifications with SignalR, enabling instant status updates and reducing client polling overhead by 70%.',
      'Optimized Azure Blob Storage handling by implementing streaming and buffered reads, reducing memory footprint by 40% and eliminating recurring 502 errors under high concurrency.',
      'Designed and structured relational database schemas supporting core project functionalities with data normalization and efficient query performance.',
      'Fine-tuned OpenAI LLM and built a FastAPI application to generate brochure documents with adaptable templates, reducing manual creation time by 70%.',
      'Migrated a legacy AngularJS application to React, modernizing the frontend architecture and improving maintainability and performance.',
      'Enhanced performance by optimizing iframe communication using postMessage and onLoad, reducing render-blocking behavior.',
      'Implemented virtual scrolling in React using react-window for large lists, reducing DOM rendering overhead.',
    ],
    startDate: 'June 2024',
    endDate: 'Present',
    technologies: [
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
      {
        name: 'PostgreSQL',
        href: 'https://www.postgresql.org/',
        icon: <PostgreSQL />,
      },
      {
        name: 'Azure',
        href: 'https://azure.microsoft.com/',
        icon: <Azure />,
      },
      {
        name: '.NET',
        href: 'https://dotnet.microsoft.com/',
        icon: <DotNet />,
      },
      {
        name: 'Azure AI Foundry',
        href: 'https://ai.azure.com/',
        icon: <AzureAI />,
      },
      {
        name: 'Postman',
        href: 'https://www.postman.com/',
        icon: <Postman />,
      },
    ],
    website: 'https://www.hcltech.com/',
    linkedin: 'https://www.linkedin.com/company/hcltech/',
  },
  {
    isCurrent: false,
    company: 'HCLTech',
    position: 'Academic Trainee',
    location: 'Chennai, India',
    image: '/company/hcltech.png',
    description: [
      'Designed and implemented a Notepad++ plugin using C++ to streamline log analysis with seamless navigation across log files with inconsistent timestamp formats.',
      'Automated issue summary updates using Python JIRA API, leveraging the Observer pattern to monitor issue descriptions and extract relevant logs.',
      'Employed Selenium WebDriver to automate log retrieval from internal systems, reducing manual effort by 100% and saving 5+ hours per week.',
    ],
    startDate: 'February 2024',
    endDate: 'June 2024',
    technologies: [
      {
        name: 'Python',
        href: 'https://www.python.org/',
        icon: <Python />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'Postman',
        href: 'https://www.postman.com/',
        icon: <Postman />,
      },
    ],
    website: 'https://www.hcltech.com/',
    linkedin: 'https://www.linkedin.com/company/hcltech/',
  },
];