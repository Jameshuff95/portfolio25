import React from 'react';
import Link from 'next/link';
import { footerLinks } from '../_links/links';

const Footer = () => {
  return (
    <footer className="p-2 text-foreground">
      <ul className="grid grid-cols-3 items-center justify-evenly gap-1">
        {footerLinks.map((footerLink) => (
          <Link
            key={footerLink.id}
            aria-label={footerLink.ariaLabel}
            href={footerLink.href}
            className=" flex justify-center items-center text-center p-3"
          >
            {footerLink.title}
          </Link>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
