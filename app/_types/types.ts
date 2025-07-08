export interface NavLink {
  id: number;
  title: string;
  href: string;
}

export interface FooterLink {
  id: number;
  ariaLabel: string;
  href: string;
  title: string;
}

export interface MobileMenuProps {
  closeMenu: () => void;
}

export interface IntroProps {
  id: number;
  title: string;
  info?: {
    id: number;
    title: string;
    description: string;
  }[];
}

export interface ProjectList {
  id: number;
  link: string;
  image: string;
  alt: string;
  title: string;
  description: string;
}
