import { FC } from 'react';

import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';
import HoverCards from '@/components/ui/HoverCards';

import { APPROACH_CARDS } from '@/data';

interface Props {}

const Index: FC<Props> = () => {
  return (
    <section id="approach" className="relative border-t border-stroke/10 bg-bg-1 py-[8vw] md:py-[12vw] overflow-hidden">
      {/* Vibrant Color Flow: Moss Green & Champagne */}
      <div className="absolute inset-x-0 h-full w-full bg-[radial-gradient(circle_at_0%_0%,var(--moss-green)_0%,transparent_50%),radial-gradient(circle_at_100%_100%,var(--primary)_0%,transparent_50%)] opacity-[0.12] pointer-events-none transition-opacity duration-1000" />

      <SectionOpacity classes="relative z-10 px-[10vw] md:px-[5vw]">
        <SectionTitle title="APPROACH." classes="pt-[2.5vw] top-0 z-20" />
        <div className="pt-[6vw]">
          <HoverCards cards={APPROACH_CARDS} />
        </div>
      </SectionOpacity>
    </section>
  );
};
export default Index;
