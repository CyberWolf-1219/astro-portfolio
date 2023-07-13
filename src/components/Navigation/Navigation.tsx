import React from 'react';
import Logo from '../Logo/Logo';
import { TOP_NAV_LINKS } from '../../data/navigation';

function Navigation() {
  return (
    <nav>
      <div>
        <Logo />
        <ul
          className={
            'w-fit h-fit flex flex-row items-center justify-between gap-[10px]'
          }></ul>
      </div>
    </nav>
  );
}

export default Navigation;
