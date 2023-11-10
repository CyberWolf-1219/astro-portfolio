import React from 'react';
import { USER_SKILLS } from '../../../data/skills';

function SkillsSection() {
  return (
    <section className={'!h-fit'}>
      <div>
        <h2>@Skills&gt;_</h2>
        <div
          className={
            'w-full h-fit py-[5px] flex flex-col items-center justify-start gap-[50px]'
          }>
          <img
            src='/dev_skills_graph.svg'
            alt='lahiru anjana software development skills svg bubble graph'
            className={'aspect-[9/16] w-full h-auto'}
          />
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
