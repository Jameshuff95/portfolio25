import React from 'react';
import { skills } from '../_lists/lists';

const SkillTags = () => {
  return (
    <main>
      <ul className="flex flex-grow flex-wrap items-center justify-center gap-3 p-2 place-items-center">
        {skills.map((skill) => (
          <li
            key={skill.id}
            className="border rounded-lg p-2 flex items-center justify-center cursor-pointer hover:text-background hover:bg-foreground w-[45%]"
          >
            {skill.title}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default SkillTags;
