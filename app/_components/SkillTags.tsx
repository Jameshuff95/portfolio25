import React from 'react';
import { skillsList } from '../_lists/lists';

const SkillTags = () => {
  return (
    <main>
      <h3 className="text-center text-3xl font-bold">Skills</h3>

      <ul className="flex flex-grow flex-wrap items-center justify-center gap-3 p-2 place-items-center">
        {skillsList.map((skill) => (
          <li
            key={skill.id}
            className="border rounded-lg p-4 flex items-center justify-center text-center cursor-pointer hover:text-background hover:bg-foreground min-w-[15%] h-[75]"
          >
            {skill.title}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default SkillTags;
