'use client';

import { useScreenWidth } from '../_hooks/screenWidth';

import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';


const Nav = () => {
  const width = useScreenWidth() ?? 0;
  return width > 400 ? <DesktopNav /> : <MobileNav />;
};

export default Nav;
