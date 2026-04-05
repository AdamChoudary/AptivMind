import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import CustomLink from './Link';

import { NAV_ITEMS } from '@/data';

import { menuSlide } from '@/shared/utils/animations';

interface Props {
  close: () => void;
}


const Index: FC<Props> = ({ close }) => {
  const [selectedIndicator, setSelectedIndicator] = useState(null);

  const smoothScroll = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
    close();
  };
  return (
    <>
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="fixed right-0 top-0 z-[4000] h-screen w-[32vw] md:w-[75vw] bg-bg-2/95 backdrop-blur-2xl border-l border-primary/10 pb-[8vw] pl-[8vw] pr-[6vw] pt-[10vw] text-text-1 shadow-2xl"
      >
        <div className='w-full border-b border-primary/20 uppercase text-primary/60 pb-[0.8vw] mb-[2.5vw] '>
          <h3 className='text-[1vw] md:text-[2.5vw] font-outfit tracking-[0.3em] font-medium'>Navigation</h3>
        </div>
        <div className='flex flex-col h-full justify-between'>

          <div className="flex flex-col justify-end space-y-[0.1vw]" onMouseLeave={() => setSelectedIndicator(null)}>
            {NAV_ITEMS.map((item, index) => (
              <CustomLink
                handleClick={() => smoothScroll(item.href)}
                key={item.title}
                data={{ ...item, index }}
                isActive={selectedIndicator === item.href}
                setSelectedIndicator={setSelectedIndicator}
              />
            ))}
          </div>

          <div className="flex flex-col gap-[2vw] group underline-offset-8">
            <div className="text-[0.8vw] md:text-[1.8vw] text-text-1/30 uppercase tracking-widest font-inter mb-[1vw]">Socials</div>
            <div className="flex flex-col gap-[0.5vw]">
              <a href="#" className="hover:text-primary transition-colors duration-300 font-outfit text-[1.2vw] md:text-[2.5vw]">LinkedIn</a>
              <a href="#" className="hover:text-primary transition-colors duration-300 font-outfit text-[1.2vw] md:text-[2.5vw]">Twitter / X</a>
            </div>
          </div>
        </div>


      </motion.div>
      <div
        aria-label="button"
        onClick={close}
        className="fixed bottom-0 left-0 right-0 top-0 z-[750] bg-bg-1/60 transition"
      ></div>
    </>
  );
};
export default Index;
