import React from 'react';

interface Props {
  sections: { sectionName: string; sectionId: string }[];
}

function ServicesNavigation({ sections }: Props) {
  return (
    <aside className='fixed z-[30] bottom-[0] right-[0] w-full h-fit max-h-screen bg-pallet-primary-light'>
      <ul className='w-full h-fit py-[10px] flex flex-row items-center justify-start font-bold text-xl overflow-x-auto snap-x snap-mandatory'>
        {sections.map((section) => {
          return (
            <li
              key={`navigation_link_${Math.random()}`}
              className='snap-center whitespace-nowrap'>
              <div className={'w-[100vw] text-center'}>
                <a
                  className='text-center pointer-events-none'
                  href={`#${section.sectionId}`}>
                  {section.sectionName.toUpperCase()}
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default ServicesNavigation;
