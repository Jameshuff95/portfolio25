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
  tech: string[];
  value: number;
}

export interface ButtonProps {
  title: string;
  onClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
}

export interface TimelineList {
  id: number;
  title: string;
}

export interface Stats {
  id: number;
  title: string;
  value: string | number;
}

export interface Skills {
  id: number;
  title: string;
}

export interface Technologies {
  id: number;
  title: string;
  value: number;
}
