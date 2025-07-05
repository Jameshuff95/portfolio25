'use client';

import { TypeIntro } from './_functions/TypeIntro';
import { Dropdowns } from './_functions/DropDowns';

export default function Home() {
  return (
    <main className="p-2 flex flex-col justify-around flex-grow min-h-full overflow-hidden">
      <TypeIntro />
      <Dropdowns />
    </main>
  );
}
