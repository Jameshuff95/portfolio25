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
    title: string;
    description: string;
  };
}
