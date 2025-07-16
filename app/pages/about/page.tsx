import React from 'react';
import AboutSummary from '@/app/_components/AboutSummary';
import Timeline from '@/app/_components/Timeline';
import StatsPanel from '@/app/_components/StatsPanel';
import SkillTags from '@/app/_components/SkillTags';
import Button from '@/app/_components/Button';
import Link from 'next/link';

const About = () => {
  return (
    <main>
      <section className="p-2">
        <header>
          <h1 className="text-5xl text-center">More about James 👇</h1>
        </header>
        <br />
        <article className="p-2 flex flex-col gap-5">
          {/* about me paragraphs */}
          <AboutSummary />
          {/* Quick Stats Panel*/}
          <StatsPanel />
          {/* Timeline of Growth */}
          <Timeline />
          {/* Animated Skill Tags*/}
          <SkillTags />
          {/* Custom Question Button */}
          <Link href="/pages/contact" className="flex justify-center">
            <Button
              title="Ask Me A Question"
              className="mx-auto w-full text-3xl"
            />
          </Link>
        </article>
      </section>
    </main>
  );
};

export default About;
