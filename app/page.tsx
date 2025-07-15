'use client';

import { TypeIntro } from './_components/TypeIntro';
import { Dropdowns } from './_components/DropDowns';
import { PortfolioPreview } from './_components/PortfolioPreview';

export default function Home() {
  return (
    <main className="flex flex-col sm:items-center">
      <TypeIntro className="sm:flex sm:flex-col sm:items-center sm:justify-center md:flex md:flex-row justify-evenly gap-2 h-full gap-3 text-center w-full md:p-4" />
      <Dropdowns className="flex flex-col p-4 w-[90%] m-auto" />
      <PortfolioPreview />
    </main>
  );
}
