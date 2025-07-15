import React from 'react';

const AboutSummary = () => {
  return (
    <article className="flex flex-col gap-2 text-xl">
      <header>
        <h3 className="font-bold text-center text-3xl">A Brief Summary</h3>
      </header>
      <div className="p-2 gap-2 flex flex-col">
        <p>
          With a foundation in Next.js, TypeScript, and backend integration, I
          build scalable projects outside of work—and bring that mindset inside
          the warehouse.
        </p>
        <p>
          My attention to detail and quick adaptability have earned the trust of
          both teammates and supervisors, whether I’m resolving a workflow issue
          or offering advice that gets scribbled down for someone’s side hustle.
        </p>
        <p>
          I believe that strong systems—digital or physical—start with the
          people who use them. So I champion learning, nudge curiosity, and keep
          things grounded with a bit of humor and good-faith teasing.
        </p>
        <p>
          My goal is to turn what I know into tools that help my team thrive,
          and to keep building from there.
        </p>
      </div>
    </article>
  );
};

export default AboutSummary;
