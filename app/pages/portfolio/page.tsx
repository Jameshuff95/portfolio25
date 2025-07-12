'use client';

import React from 'react';
import Link from 'next/link';
import Button from '@/app/_components/Button';
import Image from 'next/image';
import { projectList, technologies } from '@/app/_lists/lists';
import { useState } from 'react';

const Portfolio = () => {
  const [filter, setFilter] = useState<string>('0');

  // set the filter to the value of the value of the selected option
  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  // defines the filtered projects
  const filtered =
    filter === '0'
      ? projectList
      : projectList.filter((project) => project.value === Number(filter));

  return (
    <main>
      <section>
        <article>
          <div className="flex p-2 justify-between">
            <p>Filter by Type:</p>
            {/* Filter Element */}
            <select
              className="border bg-foreground text-background  outline-none rounded p-1"
              onChange={handleFilter}
            >
              {technologies.map((technology) => (
                <option key={technology.id} value={technology.value}>
                  {technology.title}
                </option>
              ))}
            </select>
          </div>

          {/* Filtered Projects Container */}
          <div className="p-2 flex flex-wrap gap-3 items-center justify-evenly">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="border p-2 flex flex-col gap-3 items-center rounded bg-gray-700"
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  height={0}
                  width={0}
                  className="border border-foreground w-[75%] mx-auto rounded"
                />

                <div className="flex flex-col justify-around text-center w-full">
                  <p className="font-bold">{project.title}</p>
                </div>

                <div className="bg-foreground text-background p-2 rounded border">
                  <div className="flex flex-wrap justify-evenly w-full">
                    <p>Technologies:</p>
                    {/* prettier-ignore */}
                    <p className="italic">
                      {project.tech.join(', ')}
                    </p>
                  </div>
                  <p>{project.description}</p>
                </div>

                <Link href="/">
                  <Button title="Go to Github Repository" />
                </Link>
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
};

export default Portfolio;
