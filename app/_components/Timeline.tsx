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
          <TimelineDot />
        </article>
      </section>
    </main>
  );
};

export default Timeline;
