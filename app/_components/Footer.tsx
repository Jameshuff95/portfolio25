import React from 'react';
import Link from 'next/link';
import { footerLinks } from '../_links/links';

const Footer = () => {
  return (
    <footer className="border p-2 text-foreground h-1/5">
      <ul className="grid grid-cols-3 items-center justify-evenly gap-1">
        {footerLinks.map((footerLink) => (
          <Link
            key={footerLink.id}
            aria-label={footerLink.ariaLabel}
            href={footerLink.href}
            className="border flex justify-center items-center text-center"
          >
            {footerLink.title}
          </Link>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
