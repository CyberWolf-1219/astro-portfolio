import React from 'react';
import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: ReactNode;
}

function Portal({ children }: Props) {
  return createPortal(children, document.body);
}

export default Portal;
