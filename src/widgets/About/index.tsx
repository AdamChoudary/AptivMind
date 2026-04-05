import { FC } from 'react';

import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';

interface Props {}

const Index: FC<Props> = () => {
  return (
    <section id="about" className="border-t border-gray-1 bg-gradient-to-b py-[6vw] md:py-[4vw] z-0">
      <SectionOpacity classes='z-2'>
        <SectionTitle title="ABOUT." classes="px-[6vw] md:px-[3vw] pt-[3vw] z-10" />
        <div className="relative self-start px-[10vw] md:px-[4vw] pb-[10vw] pt-[5vw]">
          <div className="flex gap-[12vw] md:flex-col md:gap-[8vw] md:items-center">
            <p className="flex grow-[4] basis-0 flex-wrap text-[1.8vw] md:text-[3.5vw] font-inter font-light leading-[1.6] text-text-1 items-center tracking-tight">
              AptivMind specializes in bridging the gap between cutting-edge AI technology and real-world business efficiency. We empower organizations through autonomous systems, bespoke web platforms, and data-driven insights that scale effortlessly.
            </p>

            <div className="relative h-[28vw] w-[38vw] md:h-[60vw] md:w-full group grow-[3] basis-0 rounded-3xl overflow-hidden border border-primary/20 shadow-[0_0_100px_-30px_rgba(179,159,132,0.2)]">
              <img 
                src="/images/hands_v2.jpg" 
                alt="AptivMind Teamwork" 
                className="inline-block object-cover w-full h-full grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-1/40 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </SectionOpacity>
    </section>
  );
};
export default Index;
