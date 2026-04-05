import { FC } from 'react';

import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';
import HoverCards from '@/components/ui/HoverCards';

import { APPROACH_CARDS } from '@/data';

interface Props {}

const Index: FC<Props> = () => {
  return (
    <section id="approach" className="relative border-t border-stroke/10 bg-bg-1 py-[12vw] md:py-[18vw] overflow-hidden">
      {/* Unique Moss Glow */}
      <div className="absolute inset-x-0 -top-[10vw] h-[30vw] w-full bg-[radial-gradient(circle_at_center,var(--moss-green)_0%,transparent_70%)] opacity-[0.07] pointer-events-none" />

      <SectionOpacity classes="relative z-10 px-[10vw] md:px-[6vw]">
        <SectionTitle title="APPROACH." classes="pt-[2.5vw] top-0 z-20" />
        <div className="pt-[8vw]">
          <HoverCards cards={APPROACH_CARDS} />
        </div>
      </SectionOpacity>
    </section>
  );
};
export default Index;
