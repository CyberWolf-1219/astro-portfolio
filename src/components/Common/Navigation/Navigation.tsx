import React from 'react';
import Logo from '../Logo/Logo';
import { TOP_NAV_LINKS } from '../../../data/navigation';
import Link from './Link';

function Navigation() {
  return (
    <nav
      className={
        'w-full h-fit max-w-[1024px] mx-auto px-[5%] py-[1rem] bg-pallet-primary text-pallet-light border-[2px] border-dashed border-pallet-accent'
      }>
      <div
        className={
          'w-full max-w-[800px] h-fit mx-auto flex flex-col md:flex-row items-center justify-start md:justify-between gap-[1rem] '
        }>
        <Logo />
        <ul
          className={
            'w-fit h-fit flex flex-row items-center justify-between gap-[1rem]'
          }>
          {TOP_NAV_LINKS.map(({ text, icon, link }, index) => {
            return (
              <Link
                text={text}
                icon={icon}
                link={link}
                index={index}
              />
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
