import React from 'react';
import Link from 'next/link';
import { navLinks } from '../_links/links';
import { MobileMenuProps } from '../_types/types';

const MobileMenu: React.FC<MobileMenuProps> = ({ closeMenu }) => {
  return (
    <ul className="text-foreground flex flex-col justify-evenly border-5 border-red-800 h-screen w-4/5 z-20 bg-gradient-to-r from-purple-400 to-red-600 text-background z-[99] fixed">
      {navLinks.map((navLink) => (
        <Link key={navLink.id} href={navLink.href}>
          <li
            className="text-background border border-transparent p-2 cursor-pointer text-4xl font-bold"
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
