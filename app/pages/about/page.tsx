import React from 'react';
import AboutSummary from '@/app/_components/AboutSummary';
import Timeline from '@/app/_components/Timeline';
import StatsPanel from '@/app/_components/StatsPanel';
import SkillTags from '@/app/_components/SkillTags';

const About = () => {
  return (
    <main>
      <section className="p-2">
        <header>
          <h1 className="text-3xl text-center">More about James 👇</h1>
        </header>
        <article className="p-2 flex flex-col gap-5">
          {/* about me paragraphs */}
          <AboutSummary />
          {/* Quick Stats Panel*/}
          <StatsPanel />
          {/* Timeline of Growth */}
          <Timeline />
          {/* Animated Skill Tags*/}
          <SkillTags />
          {/* FAQS Button */}
        </article>
      </section>
    </main>
  );
};

export default About;
