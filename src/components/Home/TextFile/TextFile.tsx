import React from 'react';
import type { UIEvent } from 'react';
import type { EducationData } from '../../types';

interface Props {
  closeAction: () => void;
  courseData: EducationData;
}

function TextFile({ closeAction, courseData }: Props) {
  function closeFile<T extends UIEvent>(e: T) {
    e.preventDefault();
    closeAction();
  }

  return (
    <div className={'w-full h-fit'}>
      <div
        className={
          'w-full h-fit px-[10px] flex flex-row items-center justify-between bg-black border-[2px] border-pallet-accent'
        }>
        <p>{courseData.course}</p>
        <button
          onDoubleClick={closeFile}
          onTouchStart={closeFile}>
          X
        </button>
      </div>
      <article
        className={
          'w-full h-fit p-[10px] bg-pallet-primary border-[2px] border-pallet-accent'
        }>
        <code>
          <h1 className={'!text-lg border-y-[2px] border-pallet-light'}>
            {courseData.course}
          </h1>
          <p className={'mb-[10px] text-justify'}>{courseData.description}</p>
          <a href={courseData.link}>Visit Course</a>
        </code>
      </article>
    </div>
  );
}

export default TextFile;
