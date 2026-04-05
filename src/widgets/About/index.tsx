import { FC } from 'react';

import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';

interface Props {}

const Index: FC<Props> = () => {
  return (
    <section id="about" className="relative border-t border-stroke/10 bg-bg-1 py-[8vw] md:py-[12vw] z-0 overflow-hidden">
      <SectionOpacity classes="relative z-10 px-[3vw] md:px-[4vw]">
        <div className="flex flex-col gap-[4vw] md:gap-[8vw]">
          <SectionTitle title="ABOUT." classes="text-left md:text-left" />
          
          <div className="flex gap-[10vw] md:flex-col md:gap-[12vw] items-center">
            <div className="w-[55%] md:w-full space-y-[2vw] md:space-y-[4vw]">
              <div className="h-[2px] w-[5vw] bg-primary/60" /> 
              <p className="text-[1.4vw] md:text-[3.2vw] font-inter font-light leading-[1.8] text-text-1/80 tracking-tight">
                <span className="text-primary font-bold tracking-widest uppercase text-[1.1vw] md:text-[2.2vw] block mb-[1vw]">Our Vision</span>
                AptivMind specializes in <span className="text-primary font-medium border-b border-primary/20">bridging the gap</span> between cutting-edge AI technology and real-world business efficiency. We empower forward-thinking organizations through autonomous systems, bespoke web platforms, and data-driven insights that scale effortlessly.
              </p>
              <p className="text-[1.1vw] md:text-[2.8vw] font-inter font-extralight text-text-1/50 leading-relaxed italic">
                Architecting digital resilience with a focus on scalable excellence.
              </p>
            </div>

            <div className="relative h-[25vw] w-[35vw] md:h-[65vw] md:w-full group rounded-[3vw] border border-primary/10 overflow-hidden shadow-[0_0_100px_-30px_rgba(179,159,132,0.15)]">
              <img 
                src="/images/hands_v2.jpg" 
                alt="AptivMind Strategy" 
                className="inline-block object-cover w-full h-full transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-1/40 via-transparent to-transparent opacity-50 group-hover:opacity-20 transition-opacity duration-1000"></div>
            </div>
          </div>
        </div>
      </SectionOpacity>
    </section>
  );
};
export default Index;
