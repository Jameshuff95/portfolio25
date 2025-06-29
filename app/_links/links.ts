import { NavLink } from '../_types/types';
import { FooterLink } from '../_types/types';

// Nav Links
export const navLinks: NavLink[] = [
  {
    id: 1,
    title: 'Home',
    href: '/',
  },
  {
    id: 2,
    title: 'About',
    href: '/pages/about',
  },
  {
    id: 3,
    title: 'Portfolio',
    href: '/pages/portfolio',
  },
  {
    id: 4,
    title: 'Contact',
    href: '/pages/contact',
  },
];

// Footer Links
export const footerLinks: FooterLink[] = [
  {
    id: 1,
    ariaLabel: 'Footer Link 1',
    href: '/',
    title: 'Footer Link 1',
  },
  {
    id: 2,
    ariaLabel: 'Footer Link 2',
    href: '/',
    title: 'Footer Link 2',
  },
  {
    id: 3,
    ariaLabel: 'Footer Link 3',
    href: '/',
    title: 'Footer Link 3',
  },
];
