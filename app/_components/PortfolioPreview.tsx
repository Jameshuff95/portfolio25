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
            <h2 className="text-center text-4xl p-2">
              Check out some of my projects! 👇
            </h2>
          </header>
          <ul className="sm:flex sm:flex-col sm:gap-3 md:gap-3 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4 p-2 place-items-center m-auto w-[90%]">
            {projectList.map((project) => (
              <article
                key={project.id}
                className="flex flex-col items-center p-2 gap-3 border rounded-sm bg-gray-700 w-[100%] my-6"
              >
                <div className="flex flex-col justify-between items-center p-2 w-full gap-3">
                  <h3 className="text-center text-5xl">{project.title}</h3>
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={0}
                    height={0}
                    className="border-2 border-foreground rounded-sm w-[80%] max-h-[175]"
                  />
                </div>

                <div className="flex flex-col justify-between items-center p-2 border rounded-sm bg-foreground text-background w-[95%] min-h-35">
                  <p className="text-xl sm:flex sm:flex-col sm:gap-5 w-full min-h-[15vh] p-2">
                    {project.description}
                  </p>

                  <div className="flex p-2 w-full justify-center">
                    <Link href={project.link} className="w-full">
                      <button className=" w-[100%] h-15 cursor-pointer p-2 text-3xl rounded-md bg-gray-600 text-foreground hover:scale-95 active:scale-90">
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
