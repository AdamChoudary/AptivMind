import { FC } from 'react';

import SectionTitle from '@/components/ui/SectionTitle';
import SectionOpacity from '@/components/ui/SectionOpacity';

interface Props {}

const Index: FC<Props> = () => {
  return (
    <section id="about" className="border-t border-gray-1 bg-gradient-to-b py-[6vw] md:py-[4vw] z-0">
      <SectionOpacity classes='z-2'>
        <SectionTitle title="ABOUT." classes="px-[6vw] md:px-[3vw] pt-[3vw] z-10" />
        <div className="relative self-start px-[6vw] md:px-[3vw] pb-[5vw] pt-[3vw]">
          <div className="flex gap-[8vw] md:flex-col md:gap-[5vw] md:items-center">
            <p className="flex grow-[4] basis-0 flex-wrap text-[2vw] md:text-[3.5vw] font-light leading-[1.4] text-text-1 items-center">
              AptivMind specializes in bridging the gap between cutting-edge AI technology and real-world business efficiency. We empower organizations through autonomous systems, bespoke web platforms, and data-driven insights that scale effortlessly.
            </p>

            <div className="relative h-[25vw] w-[35vw] md:h-[50vw] md:w-full md:max-w-[100%] group grow-[3] basis-0 rounded-2xl overflow-hidden shadow-[20px_20px_60px_-15px_rgba(83,69,62,0.3)]">
              <img 
                src="/images/hands_v2.jpg" 
                alt="AptivMind Teamwork" 
                className="inline-block object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-1/80 via-transparent to-transparent opacity-60"></div>
            </div>
          </div>
        </div>
      </SectionOpacity>
    </section>
  );
};
export default Index;
