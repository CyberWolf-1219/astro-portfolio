import React, { MouseEvent, useEffect, useRef } from 'react';

interface Props {
  buttonText: string;
  clickHandler: (e: MouseEvent<HTMLButtonElement>) => void;
  buttonRefHolder: HTMLButtonElement[];
  value: string;
}

function SelectorButton({
  buttonText,
  clickHandler,
  buttonRefHolder,
  value,
}: Props) {
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (button.current) {
      buttonRefHolder.push(button.current);
    }
  }, [button.current]);

  return (
    <button
      ref={button}
      onClick={clickHandler}
      value={value}
      className='min-w-[100vw] w-full h-full text-center snap-center whitespace-nowrap transition-transform pointer-events-none'>
      {buttonText.toUpperCase()}
    </button>
  );
}

export default SelectorButton;
