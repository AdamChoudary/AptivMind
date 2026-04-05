import { motion } from 'framer-motion';
import { slide, scale } from '@/shared/utils/animations';

import { FC } from 'react';

interface Props {
  data: any;
  isActive: boolean;
  setSelectedIndicator: any;
  handleClick: () => void;
}

const Index: FC<Props> = ({ data, isActive, setSelectedIndicator, handleClick }) => {
  const { title, href, index } = data;

  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => setSelectedIndicator(href)}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
      onClick={handleClick}
    >
      <motion.div
        className="absolute left-0 inline-block h-[0.5vw] w-[0.5vw] rounded-full bg-primary"
        variants={scale}
        animate={isActive ? 'open' : 'closed'}
      ></motion.div>
      <div tabIndex={0} className="cursor-pointer text-[3.2vw] md:text-[5vw] leading-[1.2] font-outfit font-bold tracking-tighter transition-all duration-300 hover:translate-x-[2vw] hover:text-primary uppercase">
        {title}
      </div>
    </motion.div>
  );
};
export default Index;
