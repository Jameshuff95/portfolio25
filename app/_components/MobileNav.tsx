'use client';

import { useState } from 'react';
import MobileMenu from './MobileMenu';
import { BiMenu } from 'react-icons/bi';
import Image from 'next/image';

const MobileNav = () => {
  const [isActive, setIsActive] = useState(false);

  const handleButton = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="flex justify-between items-center p-2">
      <Image
        src="/J.jpg"
        alt="Image of James"
        width={0}
        height={0}
        className="border border-blue-100 rounded-full w-1/6 h-3/4"
      />

      <BiMenu
        size={60}
        onClick={() => handleButton()}
        className={`cursor-pointer ${isActive ? 'border rounded-md' : null} position-relative z-[99]`}
      />

      {isActive && (
        <>
          <div className="fixed inset-0 bg-black/50 z-[98] pointer-events-auto" />
          <div className="absolute top-0 left-0 w-4/5">
            <MobileMenu closeMenu={() => handleButton()} />
          </div>
        </>
      )}
    </div>
  );
};

export default MobileNav;
