import React, { useState } from 'react';
import type {
  BaseSyntheticEvent,
  MouseEvent,
  TouchEvent,
  UIEvent,
} from 'react';
import type { EducationData } from '../../../types';
import Portal from '../../Common/Portal/Portal';
import Modal from '../../Common/Modal/Modal';
import TextFile from '../TextFile/TextFile';

interface Props {
  fileName: string;
  fileContent: EducationData;
}

function File({ fileName, fileContent }: Props) {
  const [open, setOpen] = useState(false);

  function openFile<T extends UIEvent>(e: T) {
    e.preventDefault();
    setOpen(true);
  }

  function closeFile() {
    setOpen(false);
  }

  return (
    <>
      {open ? (
        <Portal>
          <Modal>
            <TextFile
              closeAction={closeFile}
              courseData={fileContent}
            />
          </Modal>
        </Portal>
      ) : null}
      <div
        onDoubleClick={openFile<MouseEvent>}
        onTouchStart={openFile<TouchEvent>}
        className={'aspect-[1/1.3] w-[50px] max-w-[50px] h-auto'}>
        <div
          className={'w-full h-full  bg-white text-pallet-primary text-center'}>
          txt
        </div>
        <p
          className={
            'max-w-[50px] h-fit mt-[5px] leading-3 break-words whitespace-break-spaces'
          }>
          {fileName}
        </p>
      </div>
    </>
  );
}

export default File;
