'use client';

import { useScreenWidth } from '../_hooks/useScreenWidth';

import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Nav = () => {
  const width = useScreenWidth() ?? 0;
  return width > 800 ? <DesktopNav /> : <MobileNav />;
};

export default Nav;
