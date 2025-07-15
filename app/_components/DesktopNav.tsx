import { navLinks } from '../_links/links';
import Link from 'next/link';
import Image from 'next/image';

const DesktopNav = () => {
  return (
    <div className="flex h-15 border-b p-1">
      <Image
        src="/J.jpg"
        alt="Image of James"
        width={0}
        height={0}
        className="w-1/6"
      />

      <ul className="text-foreground flex justify-evenly items-center w-5/6">
        {navLinks.map((navLink) => (
          <Link key={navLink.id} href={navLink.href}>
            <li className="border-b border-transparent hover:border-b hover:border-foreground text-2xl">
              {navLink.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default DesktopNav;
