import { FC } from 'react';

import SectionTitle from '@/components/ui/SectionTitle';
import ServiceCard from '@/components/ServiceCard';

import { CARDS } from '@/data';

interface Props {}

const Index: FC<Props> = () => {
  return (
    <section id="services" className="relative border-t border-stroke/10 py-[8vw] md:py-[12vw] overflow-hidden bg-bg-1">
      {/* Silent Background Depth */}
      <div className="absolute inset-x-0 top-0 h-full w-full bg-[radial-gradient(circle_at_70%_0%,var(--burgundy)_0%,transparent_50%),radial-gradient(circle_at_0%_100%,var(--umber)_0%,transparent_50%)] opacity-[0.03] pointer-events-none" />
      
      <div className="relative z-10 px-[3vw] md:px-[4vw]">
        <SectionTitle title="SERVICES." classes="text-right pb-[6vw]" />
        
        <div className="flex flex-col">
          {CARDS.map((card) => (
            <ServiceCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Index;
