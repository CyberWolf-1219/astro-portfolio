import React, { Children } from 'react';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Modal({ children }: Props) {
  return (
    <div
      className={`fixed inset-0 z-[100] w-full h-full p-[5vw] flex flex-col items-center justify-center`}>
      {children}
    </div>
  );
}

export default Modal;
