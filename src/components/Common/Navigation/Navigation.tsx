import React from 'react';
import Logo from '../Logo/Logo';
import { TOP_NAV_LINKS } from '../../../data/navigation';
import Link from './Link';

function Navigation() {
  return (
    <nav
      className={
        'px-[5%] py-[1rem] bg-pallet-primary-light shadow-md shadow-pallet-primary  text-pallet-light'
      }>
      <div
        className={
          'w-full max-w-[1024px] h-fit mx-auto flex flex-col md:flex-row items-center justify-start md:justify-between gap-[1rem]'
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
