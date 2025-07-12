import React from 'react';
import TimelineDot from './TimelineDot';

const Timeline = () => {
  return (
    <main>
      <section>
        <article>
          <header>
            <h3 className="font-bold text-center text-4xl">Growth Timeline</h3>
          </header>
          <article>
            <div className="p-2 flex flex-grow overflow-x-auto items-center gap-8 h-40">
              <TimelineDot />
            </div>
          </article>
        </article>
      </section>
    </main>
  );
};

export default Timeline;
