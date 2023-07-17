import React from 'react';
import { EDUCAION_MILESTONES } from '../../data/education';
import FolderIcon from '../FolderIcon/FolderIcon';

function EducationSection() {
  return (
    <section>
      <div>
        <h2>@Education Section&gt;_</h2>
        <ul className={'w-full h-fit grid grid-cols-3 gap-[10px] items-center'}>
          {EDUCAION_MILESTONES.map(({ institute, courses }, index) => {
            return (
              <FolderIcon
                key={`folder_${index}`}
                folderName={institute}
                folderContent={courses}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default EducationSection;
