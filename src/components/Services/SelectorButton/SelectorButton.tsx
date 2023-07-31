import React, { MouseEvent, useEffect, useRef } from 'react';

interface Props {
  buttonText: string;
  clickHandler: (e: MouseEvent<HTMLButtonElement>) => void;
  buttonRefHolder: HTMLButtonElement[];
}

function SelectorButton({ buttonText, clickHandler, buttonRefHolder }: Props) {
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    buttonRefHolder.push(button.current!);
  });

  return (
    <button
      ref={button}
      onClick={clickHandler}
      className='min-w-[100vw] h-fit text-center snap-center whitespace-nowrap'>
      {buttonText.toUpperCase()}
    </button>
  );
}

export default SelectorButton;
