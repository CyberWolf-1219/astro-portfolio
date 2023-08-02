import React, { useState } from 'react';
import type { MouseEvent, TouchEvent } from 'react';
import type { EducationData } from '../../../types';
import Portal from '../../Common/Portal/Portal';
import Modal from '../../Common/Modal/Modal';
import Window from '../Window/Window';

interface Props {
  folderName: string;
  folderContent: Array<EducationData>;
}

function FolderIcon({ folderName, folderContent }: Props) {
  const [open, setOpen] = useState(false);

  function openWindow(
    e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>
  ) {
    setOpen(true);
  }

  function closeWindow() {
    setOpen(false);
  }

  return (
    <>
      {open ? (
        <Portal>
          <Modal>
            <Window
              closeFunction={closeWindow}
              folderName={folderName}
              files={folderContent}
            />
          </Modal>
        </Portal>
      ) : null}
      <div
        onDoubleClick={openWindow}
        onTouchStart={openWindow}
        className={'aspect-[4/3] w-[80px] h-auto select-none'}>
        <div className={'w-[50%] h-[8px] bg-pallet-accent'}></div>
        <div className={'w-full h-full bg-pallet-accent'}></div>
        <p className={'w-full h-fit'}>{folderName}</p>
      </div>
    </>
  );
}

export default FolderIcon;
