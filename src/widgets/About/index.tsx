import { FC } from 'react';

import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';

interface Props {}

const Index: FC<Props> = () => {
  return (
    <section id="about" className="relative border-t border-stroke/10 bg-bg-1 py-[10vw] md:py-[15vw] z-0 overflow-hidden">
      <SectionOpacity classes="relative z-10 px-[10vw] md:px-[4vw]">
        <div className="flex flex-col gap-[6vw] md:gap-[12vw]">
          <SectionTitle title="ABOUT." classes="text-left md:text-left" />
          
          <div className="flex gap-[8vw] md:flex-col md:gap-[10vw] items-center">
            <div className="w-[60%] md:w-full">
              <p className="text-[2vw] md:text-[3.8vw] font-inter font-light leading-[1.6] text-text-1 items-center tracking-tight">
                AptivMind specializes in <span className="text-primary font-medium">bridging the gap</span> between cutting-edge AI technology and real-world business efficiency. We empower forward-thinking organizations through autonomous systems, bespoke web platforms, and data-driven insights that scale effortlessly.
              </p>
            </div>

            <div className="relative h-[25vw] w-[35vw] md:h-[65vw] md:w-full group rounded-[2.5vw] overflow-hidden border border-primary/20 shadow-[0_0_80px_-20px_rgba(179,159,132,0.2)]">
              <img 
                src="/images/hands_v2.jpg" 
                alt="AptivMind Strategy" 
                className="inline-block object-cover w-full h-full opacity-90 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-1/30 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-1000"></div>
            </div>
          </div>
        </div>
      </SectionOpacity>
    </section>
  );
};
export default Index;
