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
      className='min-w-[100vw] w-full md:min-w-fit h-full text-center snap-center whitespace-nowrap md:whitespace-pre-wrap md:border-b-[2px] md:border-pallet-secondary transition-transform pointer-events-none md:pointer-events-auto'>
      {buttonText.toUpperCase()}
    </button>
  );
}

export default SelectorButton;
