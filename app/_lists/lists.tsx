import { IntroProps, ProjectList } from '../_types/types';

export const introWords: IntroProps[] = [
  {
    id: 1,
    title: 'Web Developer.',
  },
  {
    id: 2,
    title: 'Tester.',
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
    title: 'My Acheivements',
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
    image: '/J.jpg',
    alt: 'Image alt 1',
    title: 'Project 1',
    description: 'This is a basic description of the project.',
  },
  {
    id: 2,
    link: '/',
    image: '/J.jpg',
    alt: 'Image alt 2',
    title: 'Project 2',
    description: 'This is a basic description of the project.',
  },
  {
    id: 3,
    link: '/',
    image: '/J.jpg',
    alt: 'Image alt 3',
    title: 'Project 3',
    description: 'This is a basic description of the project.',
  },
  {
    id: 4,
    link: '/',
    image: '/J.jpg',
    alt: 'Image alt 4',
    title: 'Project 4',
    description: 'This is a basic description of the project.',
  },
];
