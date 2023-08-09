import React from 'react';
import { USER_SKILLS } from '../../../data/skills';

function SkillsSection() {
  return (
    <section>
      <div>
        <h2>@Skills&gt;_</h2>
        <div
          className={
            'w-full h-fit py-[5px] flex flex-col items-center justify-start gap-[50px]'
          }>
          <img
            src='/software_development.svg'
            alt='lahiru anjana software development skills svg bubble graph'
            className={'aspect-[16/9] w-full h-auto'}
          />
          <img
            src='/web_development.svg'
            alt='lahiru anjana web development skills svg bubble graph'
            className={'aspect-[16/9] w-full h-auto'}
          />
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
