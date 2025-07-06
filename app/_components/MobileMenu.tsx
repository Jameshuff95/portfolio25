import React from 'react';
import Link from 'next/link';
import { navLinks } from '../_links/links';
import { MobileMenuProps } from '../_types/types';

const MobileMenu: React.FC<MobileMenuProps> = ({ closeMenu }) => {
  return (
    <ul className="text-foreground flex flex-col justify-evenly border h-screen w-4/5 z-20 bg-foreground text-background">
      {navLinks.map((navLink) => (
        <Link key={navLink.id} href={navLink.href}>
          <li
            className="text-background border border-transparent hover:border-background p-2 cursor-pointer text-4xl"
            onClick={closeMenu}
          >
            {navLink.title}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default MobileMenu;
