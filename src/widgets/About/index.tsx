import { FC } from 'react';

import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';

interface Props {}

const Index: FC<Props> = () => {
  return (
    <section id="about" className="relative border-t border-stroke/10 bg-bg-1 py-[12vw] md:py-[18vw] overflow-hidden">
      {/* Structural Watermark */}
      <h2 className="absolute inset-x-0 -bottom-[5vw] select-none text-[22vw] font-outfit font-black text-white/[0.02] leading-none pointer-events-none text-center">
        INTELLIGENCE
      </h2>

      {/* Asymmetrical Background Accent */}
      <div className="absolute left-0 top-0 w-[40vw] h-full bg-gradient-to-r from-midnight/20 to-transparent pointer-events-none" />

      <SectionOpacity classes="relative z-10 px-[10vw] md:px-[5vw]">
        <div className="flex flex-col gap-[6vw] md:gap-[12vw]">
          <SectionTitle title="ABOUT." classes="text-left md:text-left" />
          
          <div className="grid grid-cols-12 gap-[4vw] md:flex md:flex-col items-start">
            <div className="col-span-7 md:col-span-12">
              <p className="text-[2.2vw] md:text-[4vw] font-inter font-light leading-[1.6] text-text-1 items-center tracking-tight opacity-90">
                AptivMind specializes in <span className="text-primary font-medium">bridging the gap</span> between cutting-edge AI technology and real-world business efficiency. 
              </p>
              <div className="mt-[3vw] h-[1px] w-[8vw] bg-primary/40" />
              <p className="mt-[3vw] text-[1.4vw] md:text-[3.2vw] font-inter font-extralight leading-[1.8] text-text-1/60 max-w-[85%]">
                We empower forward-thinking organizations through autonomous systems, bespoke web platforms, and data-driven insights that scale effortlessly in the digital era.
              </p>
            </div>

            <div className="col-span-5 md:col-span-12 relative h-[32vw] md:h-[70vw] w-full group rounded-[2.5vw] overflow-hidden border border-primary/20 shadow-[0_0_120px_-40px_rgba(179,159,132,0.25)]">
              <img 
                src="/images/hands_v2.jpg" 
                alt="AptivMind Strategy" 
                className="inline-block object-cover w-full h-full grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-1000 ease-in-out scale-110 group-hover:scale-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-burgundy/40 via-transparent to-midnight/40 mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </SectionOpacity>
    </section>
  );
};
export default Index;
