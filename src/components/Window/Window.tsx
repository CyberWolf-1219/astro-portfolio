import React from 'react';
import type { MouseEvent } from 'react';
import File from '../File/File';
import type { EducationData } from '../../types';

interface Props {
  closeFunction: () => void;
  folderName: string;
  files: Array<EducationData>;
}

function Window({ closeFunction, folderName, files }: Props) {
  function closeBtnHandler(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    closeFunction();
  }

  return (
    <div className={'w-full h-fit'}>
      <div
        className={
          'w-full h-fit pl-[10px] flex flex-row items-center justify-between bg-pallet-accent/50 border-[2px] border-pallet-accent border-b-transparent'
        }>
        <p>{folderName}</p>
        <button
          onClick={closeBtnHandler}
          className={
            'aspect-[1/1] w-[25px] h-auto px-[0.2rem] bg-pallet-light text-pallet-accent'
          }>
          X
        </button>
      </div>
      <div
        className={
          'w-full h-fit max-h-full p-[10px] grid grid-cols-3 gap-[20px] justify-items-center bg-pallet-accent/80 border-[2px] border-pallet-accent overflow-y-scroll'
        }>
        {files.map((file, index) => {
          return (
            <File
              key={`file_${index}`}
              fileName={file.course}
              fileContent={file}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Window;
