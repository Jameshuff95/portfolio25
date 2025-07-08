import React from 'react';
import { projectList } from '../_lists/lists';
import Link from 'next/link';
import Image from 'next/image';

export const PortfolioPreview = () => {
  return (
    <main>
      <section>
        <article className="flex flex-col gap-2">
          <header>
            <h2 className="text-center text-3xl p-2">
              Check out some of my projects! 👇
            </h2>
          </header>
          <ul className="grid grid-cols-2 gap-3">
            {projectList.map((project) => (
              <article
                key={project.id}
                className="flex flex-col items-center p-2 gap-3 border"
              >
                <div className="flex flex-col justify-between items-center p-2 w-1/2 sm:w-full gap-3">
                  <h3 className="text-center text-2xl sm:text-6xl">
                    {project.title}
                  </h3>
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={0}
                    height={0}
                    className="border-2 border-foreground rounded-sm w-6/5"
                  />
                </div>

                <div className="flex flex-col justify-between p-2 border rounded-sm bg-foreground text-background w-1/2 min-h-35 sm:w-full">
                  <p className="text-lg sm:text-center sm:flex sm:flex-col sm:gap-5">
                    {project.description}
                  </p>

                  <div className="flex sm:justify-center justify-end p-2">
                    <Link href={project.link}>
                      <button className="border cursor-pointer p-2 text-lg rounded-md bg-gray-600 text-foreground border border-black">
                        Click for more!
                      </button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
};
