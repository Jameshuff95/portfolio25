import {
  IntroProps,
  ProjectList,
  TimelineList,
  Stats,
  Skills,
  Technologies,
} from '../_types/types';

export const introWords: IntroProps[] = [
  {
    id: 1,
    title: 'Web Developer.',
  },
  {
    id: 2,
    title: 'Blue-collar Worker.',
  },
  {
    id: 3,
    title: 'Father.',
  },
];

export const introPhrases: IntroProps[] = [
  {
    id: 1,
    title: 'Phrase 1',
  },
  {
    id: 2,
    title: 'Phrase 2',
  },
  {
    id: 3,
    title: 'Phrase 3',
  },
  {
    id: 4,
    title: 'Phrase 4',
  },
];

// Goals
export const introDropdowns: IntroProps[] = [
  {
    id: 1,
    title: 'My Goals',
    info: [
      {
        id: 1,
        title: 'Advance My Technical Versatility',
        description:
          'Continue expanding my skill set by learning backend technologies and deepening understanding of scalable architecture to build more complete, production-ready applications.',
      },
      {
        id: 2,
        title: 'Elevate Accessibility & User Experience',
        description:
          'Prioritize accessibility and semantic structure in every project to deliver inclusive, intuitive experiences for all users.',
      },
      {
        id: 3,
        title: 'Optimize for Modularity and Reusability',
        description:
          'Create robust, reusable components and hooks to support maintainable, scalable codebases across projects.',
      },
    ],
  },
  {
    id: 2,
    title: 'My Achievements',
    info: [
      {
        id: 1,
        title: 'Fostered Team Growth Through Informal Mentorship',
        description:
          'Regularly offered advice and encouragement to coworkers exploring new skills or roles while providing tech guidance, career support, and lighthearted mentorship that strengthened team morale.',
      },
      {
        id: 2,
        title:
          'Built a Fully Functional Contact Form with Confirmation Messaging',
        description:
          'Developed a production-ready contact form using Next.js and TypeScript, featuring backend email delivery via API integration, real-time confirmation messaging, and clean UX. Deployed through Vercel for optimized performance and scalability.',
      },
      {
        id: 3,
        title: 'Self-Taught Next.js & TypeScript for Scalable Web Development',
        description:
          'Independently learned and implemented Next.js and TypeScript to build modular, production-ready applications featuring: dynamic routing, type safety, and full backend integration.',
      },
    ],
  },
  {
    id: 3,
    title: 'Workplace Strengths',
    info: [
      {
        id: 1,
        title: 'Collaborative Leadership',
        description:
          'Offer advice, foster curiosity, and uplift teammates without needing a title',
      },
      {
        id: 2,
        title: 'User Experience Sensitivity',
        description:
          'Spot UI/UX flaws that hinder usability, from clumped buttons to inefficient layouts, and suggest actionable improvements.',
      },
      {
        id: 3,
        title: 'Emotional Intelligence',
        description:
          'Balance good-faith teasing, mentorship, and respectful communication to build trust and a strong team culture.',
      },
    ],
  },
];

export const projectList: ProjectList[] = [
  {
    id: 1,
    link: '/',
    image: '/placeholder.png',
    alt: 'Image alt 1',
    title: 'Project 1',
    description: 'This is a basic description of the project.',
    tech: ['tech 1', 'tech 2', 'tech 3'],
    value: 0,
  },
  {
    id: 2,
    link: '/',
    image: '/placeholder.png',
    alt: 'Image alt 2',
    title: 'Project 2',
    description: 'This is a basic description of the project.',
    tech: ['tech 1', 'tech 2', 'tech 3'],
    value: 1,
  },
  {
    id: 3,
    link: '/',
    image: '/placeholder.png',
    alt: 'Image alt 3',
    title: 'Project 3',
    description: 'This is a basic description of the project.',
    tech: ['tech 1', 'tech 2', 'tech 3'],
    value: 2,
  },
  {
    id: 4,
    link: '/',
    image: '/placeholder.png',
    alt: 'Image alt 4',
    title: 'Project 4',
    description: 'This is a basic description of the project.',
    tech: ['tech 1', 'tech 2', 'tech 3'],
    value: 4,
  },
];

export const timelineList: TimelineList[] = [
  {
    id: 1,
    title: 'Learned Semantic HTML & Responsive CSS',
  },
  {
    id: 2,
    title: 'Mastered JavaScript Fundamentals & DOM Manipulation',
  },
  {
    id: 3,
    title: 'Version Control with Git & GitHub Collaboration',
  },
  {
    id: 4,
    title: 'Built Interactive UIs with React & Hooks',
  },
  {
    id: 5,
    title: 'Styled Projects Rapidly with Tailwind CSS',
  },
  {
    id: 6,
    title: 'Leveled Up with TypeScript for Safe Components',
  },
  {
    id: 7,
    title: 'Improved Accessibility & User Experience',
  },
  {
    id: 8,
    title: 'Integrated APIs for Dynamic Content',
  },
  {
    id: 9,
    title: 'Built Scalable Apps with Next.js Routing & Optimization',
  },
  {
    id: 10,
    title: 'Handled Fullstack Logic with Next.js API Routes',
  },
  {
    id: 11,
    title: 'Shipped Fullstack Projects & Deployed with Vercel',
  },
];

export const statsList: Stats[] = [
  {
    id: 1,
    title: 'Years Experience',
    value: '4+',
  },
  {
    id: 2,
    title: 'Languages',
    value:
      'Javascript, Typescript, Git, Bash, Powershell, SQL, PostgreSQL, MongoDB, MariaDB',
  },
  {
    id: 3,
    title: 'Tools',
    value: 'Next.js, Vercel, Resend, Github',
  },
];

export const skillsList: Skills[] = [
  {
    id: 0,
    title: 'HTML 5',
  },
  {
    id: 1,
    title: 'Vanilla JS',
  },
  {
    id: 2,
    title: 'React.js',
  },
  {
    id: 3,
    title: 'Next.js',
  },
  {
    id: 4,
    title: 'Node.js',
  },
  {
    id: 5,
    title: 'Jest.js',
  },
  {
    id: 6,
    title: 'Typescript',
  },
  {
    id: 7,
    title: 'SQL Server',
  },
  {
    id: 8,
    title: 'MariaDB',
  },
  {
    id: 9,
    title: 'MongoDB',
  },
  {
    id: 10,
    title: 'Git',
  },
  {
    id: 11,
    title: 'Github',
  },
  {
    id: 12,
    title: 'Netlify',
  },
  {
    id: 13,
    title: 'Vercel',
  },
];

export const technologies: Technologies[] = [
  {
    id: 0,
    title: 'All',
    value: 0,
  },
  {
    id: 1,
    title: 'Websites',
    value: 1,
  },
  {
    id: 2,
    title: 'Web Apps',
    value: 2,
  },
  {
    id: 3,
    title: 'Games',
    value: 3,
  },
  {
    id: 4,
    title: 'Other',
    value: 4,
  },
];
