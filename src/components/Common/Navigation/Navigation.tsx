import React from 'react';
import Logo from '../Logo/Logo';
import { TOP_NAV_LINKS } from '../../../data/navigation';

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
            'w-fit h-fit flex flex-row items-center justify-between gap-[2rem]'
          }>
          {TOP_NAV_LINKS.map(({ text, icon, link }, index) => {
            return (
              <li
                key={`nav_link_${index}`}
                className={
                  'w-fit h-fit px-[0.5em] py-[0.3em] hover:bg-pallet-accent  transition-colors duration-[300ms] ease-out group/link'
                }>
                <a
                  href={link}
                  className={
                    'flex flex-row items-center justify-start gap-[0.25em]'
                  }>
                  <img
                    src={icon}
                    className={
                      'aspect-[1/1] w-[1em] h-auto group-hover/link:brightness-[5] transition-all ease-out duration-[300ms]'
                    }
                  />
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
