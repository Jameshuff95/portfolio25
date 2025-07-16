import React from 'react';
import { statsList } from '../_lists/lists';

const StatsPanel = () => {
  return (
    <main className="flex flex-col gap-5">
      <header>
        <h3 className="text-3xl text-center font-bold ">Personal Stats:</h3>
      </header>
      <ul>
        {statsList.map((stat) => (
          <div key={stat.id} className="flex p-2 gap-3">
            <p className="flex justify-start w-[25%] font-bold text-lg">
              {stat.title}:
            </p>
            <p className="w-[75%] text-xl">{stat.value}</p>
          </div>
        ))}
      </ul>
    </main>
  );
};

export default StatsPanel;
