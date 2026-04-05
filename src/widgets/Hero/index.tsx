'use client';
import { useRef } from 'react';
import Image from 'next/image';

import useFloatingImages from '@/composables/useFloatingImages';

import { useScroll, useTransform, motion } from 'framer-motion';

import { main_1, main_2, main_3 } from './images/index';

const Hero = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const { manageMouseMove } = useFloatingImages(ref1, ref2, ref3);

  const heading1 = useRef(null);
  const heading2 = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heading1,
    offset: ['start 0.35', 'end 0.1'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section id="main" className="relative h-screen w-full overflow-hidden bg-[radial-gradient(circle_at_center,var(--midnight-blue)_0%,var(--onyx)_100%)]">
      <div
        onMouseMove={(e) => manageMouseMove(e)}
        className="relative left-0 top-0 flex h-full w-full flex-col items-center justify-center overflow-hidden"
      >
        <motion.h1
          ref={heading1}
          className="relative z-20 w-full text-center text-[5.5vw] md:text-[8vw] md:leading-[1.1] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-text-1 via-primary to-text-1 max-w-[95%] tracking-tighter"
          style={{ opacity }}
        >
          ADVANCING INTELLIGENCE.<br />SCALING POSSIBILITIES.
        </motion.h1>
        <motion.h2 ref={heading2} className="z-20 mt-6 text-[1.4vw] md:text-[3vw] font-light text-primary/80 tracking-[0.5em] uppercase" style={{ opacity }} >
          Specialized AI & Digital Solutions Agency
        </motion.h2>

        <div ref={ref1} className="absolute left-0 top-0 z-10 h-full w-full pointer-events-none">
          <Image src={main_1} fill={true} alt="" className='' objectFit="cover" />
        </div>

        <div ref={ref2} className="absolute left-0 top-0 h-full w-full pointer-events-none">
          <Image src={main_2} fill={true} alt="" objectFit="cover" />
        </div>

        <div ref={ref3} className="absolute left-0 top-0 h-full w-full pointer-events-none">
          <Image src={main_3} fill={true} alt="" objectFit="cover" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
