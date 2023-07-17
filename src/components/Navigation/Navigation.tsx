import React from 'react';
import Logo from '../Logo/Logo';
import { TOP_NAV_LINKS } from '../../data/navigation';

function Navigation() {
  return (
    <nav
      className={
        'px-[5%] py-[2.5%] bg-pallet-primary-light shadow-md shadow-pallet-primary  text-pallet-light'
      }>
      <div
        className={
          'w-full max-w-[1280px] h-fit mx-auto flex flex-col items-center justify-start gap-[15px]'
        }>
        <Logo />
        <ul
          className={
            'w-fit h-fit flex flex-row items-center justify-between gap-[10px]'
          }>
          {TOP_NAV_LINKS.map(({ text, link }, index) => {
            return (
              <li key={`nav_link_${index}`}>
                <a href={link}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
