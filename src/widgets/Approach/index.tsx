import { FC } from 'react';

import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';
import HoverCards from '@/components/ui/HoverCards';

import { APPROACH_CARDS } from '@/data';

interface Props {}

const Index: FC<Props> = () => {
  return (
    <section id="approach" className="relative border-t border-stroke/10 bg-bg-1 py-[8vw] md:py-[12vw] overflow-hidden">
      {/* Silent Moss Glow */}
      <div className="absolute inset-x-0 h-full w-full bg-[radial-gradient(circle_at_50%_0%,var(--moss-green)_0%,transparent_70%)] opacity-[0.03] pointer-events-none" />

      <SectionOpacity classes="relative z-10 px-[3vw] md:px-[4vw]">
        <SectionTitle title="APPROACH." classes="pt-[2.5vw] top-0 z-20" />
        <div className="pt-[6vw]">
          <HoverCards cards={APPROACH_CARDS} />
        </div>
      </SectionOpacity>
    </section>
  );
};
export default Index;
