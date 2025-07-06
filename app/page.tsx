'use client';

import { TypeIntro } from './_functions/TypeIntro';
import { Dropdowns } from './_components/DropDowns';

export default function Home() {
  return (
    <main className="p-2 flex flex-col justify-evenly flex-grow h-full">
      <TypeIntro />

      <header>
        <h2 className="text-center text-3xl p-3">
          What James is all about 👀👇
        </h2>
      </header>

      <Dropdowns />
    </main>
  );
}
