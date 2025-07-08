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

export const introDropdowns: IntroProps[] = [
  {
    id: 1,
    title: 'My Goals',
    info: [
      {
        id: 1,
        title: 'About Title 1',
        description: 'This is a description.',
      },
      {
        id: 2,
        title: 'About Title 2',
        description: 'This is a description.',
      },
      {
        id: 3,
        title: 'About Title 3',
        description: 'This is a description.',
      },
    ],
  },
  {
    id: 2,
    title: 'My Achievements',
    info: [
      {
        id: 1,
        title: 'Achievement 1',
        description: 'This is a description.',
      },
      {
        id: 2,
        title: 'Achievement 2',
        description: 'This is a description.',
      },
      {
        id: 3,
        title: 'Achievement 3',
        description: 'This is a description.',
      },
    ],
  },
  {
    id: 3,
    title: 'Other',
    info: [
      {
        id: 1,
        title: 'Other 1',
        description: 'This is a description.',
      },
      {
        id: 2,
        title: 'Other 2',
        description: 'This is a description.',
      },
      {
        id: 3,
        title: 'Other 3',
        description: 'This is a description.',
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
];
