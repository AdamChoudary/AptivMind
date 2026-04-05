import { FC } from 'react';

import SectionTitle from '@/components/ui/SectionTitle';
import ServiceCard from '@/components/ServiceCard';

import { CARDS } from '@/data';

interface Props {}

const Index: FC<Props> = () => {
  return (
    <section id="services" className="relative border-t border-stroke/10 py-[12vw] md:py-[18vw] overflow-hidden bg-bg-1">
      {/* Services Spotlight */}
      <div className="absolute right-0 top-0 w-[50vw] h-full bg-gradient-to-l from-burgundy/10 to-transparent pointer-events-none" />
      
      <div className="relative px-[10vw] md:px-[5vw]">
        <SectionTitle title="SERVICES." classes="text-right pb-[8vw]" />
        
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
