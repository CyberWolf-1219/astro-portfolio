import React from 'react';

interface Props {
  index: number;
  link: string;
  icon: string;
  text: string;
}

function Link({ index, link, icon, text }: Props) {
  return (
    <li
      key={`nav_link_${index}`}
      className={
        'w-fit h-fit px-[0.5em] py-[0.3em] hover:bg-pallet-accent  transition-colors duration-[300ms] ease-out group/link'
      }>
      <a
        href={link}
        className={
          'flex flex-row items-center justify-start gap-[0.25em] text-lg'
        }>
        <p className={'flex flex-row items-center justify-start gap-[0.5rem]'}>
          <img
            src={icon}
            className={
              'aspect-[1/1] w-[1rem] h-auto group-hover/link:brightness-[5] transition-all ease-out duration-[300ms]'
            }
          />
          <span>{text}</span>
        </p>
      </a>
    </li>
  );
}

export default Link;
