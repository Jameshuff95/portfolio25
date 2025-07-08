'use client';

import { TypeIntro } from './_functions/TypeIntro';
import { Dropdowns } from './_components/DropDowns';
import { PortfolioPreview } from './_components/PortfolioPreview';

export default function Home() {
  return (
    <main className="p-2 flex flex-col jusitfy-evenly gap-2 h-full">
      <TypeIntro />
      <Dropdowns />
      <PortfolioPreview />
    </main>
  );
}
