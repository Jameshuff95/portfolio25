import React from 'react';
import { statsList } from '../_lists/lists';

const StatsPanel = () => {
  return (
    <main>
      <header>
        <h3 className="text-xl text-center font-bold">Stats:</h3>
      </header>
      <ul className="">
        {statsList.map((stat) => (
          <div key={stat.id} className="flex p-2">
            <p className="text-center flex justify-start w-[50%]">
              {stat.title}
            </p>
            <p className="w-[50%]">{stat.value}</p>
          </div>
        ))}
      </ul>
    </main>
  );
};

export default StatsPanel;
