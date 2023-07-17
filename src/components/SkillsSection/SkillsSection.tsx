import React from 'react';
import { USER_SKILLS } from '../../data/skills';

function SkillsSection() {
  return (
    <section>
      <div>
        <h2>@Skills Section&gt;_</h2>
        <div className={'w-full h-fit py-[5px] bg-pallet-primary-light'}>
          <code className={'w-full h-fit  text-pallet-accent'}>
            brain@dev&gt; ls user-skills
            <ul className={'w-full h-fit'}>
              <li>---&nbsp;&nbsp;&nbsp;&nbsp;.</li>
              <li>---&nbsp;&nbsp;&nbsp;&nbsp;..</li>
              {USER_SKILLS.map((skill) => {
                return (
                  <li key={Math.random()}>
                    ---&nbsp;&nbsp;&nbsp;&nbsp;{skill}
                  </li>
                );
              })}
            </ul>
          </code>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
