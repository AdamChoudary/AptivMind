import { FC, SVGProps, useState } from 'react';

import { cn } from '@/shared/utils';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
  cards: { number?: string; title: string; icon: FC<SVGProps<SVGSVGElement>>; description: string }[];
  wrapperClasses?: string;
  itemClasses?: string;
}

const Index: FC<Props> = ({ cards, itemClasses, wrapperClasses }) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className={cn('grid grid-cols-2 md:grid-cols-1 gap-[2vw] md:gap-[4vw]', itemClasses)}>
      {cards.map((card, idx) => (
        <div
          key={idx}
          className={cn('relative flex flex-col p-[0.5vw] group', itemClasses)}
          onMouseEnter={() => setHoveredIdx(idx)}
          onMouseLeave={() => setHoveredIdx(null)}
        >
          <AnimatePresence>
            {hoveredIdx === idx && (
              <motion.span
                className={cn(
                  'absolute inset-0 z-0 block h-full w-full rounded-[2vw] bg-primary/[0.03] border border-primary/20 shadow-[0_0_40px_-10px_rgba(179,159,132,0.1)] backdrop-blur-2xl',
                  wrapperClasses,
                )}
                layoutId="cardHoverEffect"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.3, ease: 'easeOut' },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.98,
                  transition: { duration: 0.2, ease: 'easeIn' },
                }}
              />
            )}
          </AnimatePresence>
          
          <div
            className={cn(
              'relative z-[1] h-full flex flex-col gap-[2vw] md:gap-[5vw] rounded-[2vw] border border-white/[0.05] bg-white/[0.02] p-[3vw] transition-all duration-700 group-hover:border-primary/40 group-hover:bg-white/[0.05]',
            )}
          >
            {/* Numbering Accent */}
            {card.number && (
              <span className="absolute top-[2vw] right-[2vw] text-[4vw] md:text-[8vw] font-outfit font-black text-moss-green/20 group-hover:text-moss-green/40 transition-colors duration-700">
                {card.number}
              </span>
            )}

            <div className="flex items-center gap-[1.5vw] md:gap-[3vw]">
              <div className="text-primary scale-110 md:scale-125 transition-transform duration-700 group-hover:scale-125 group-hover:rotate-[5deg]">
                <card.icon />
              </div>
              <h6 className="text-[1.8vw] md:text-[4.5vw] font-outfit font-bold tracking-tight text-text-1">{card.title}</h6>
            </div>

            <p className="text-[1.1vw] md:text-[3.2vw] font-inter font-light leading-[1.6] text-text-1/50 group-hover:text-text-1/80 transition-colors duration-700 max-w-[90%]">
              {card.description}
            </p>
            
            {/* Bottom link/indicator */}
            <div className="mt-auto pt-[1vw] flex items-center gap-[0.5vw] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <span className="text-[0.9vw] md:text-[2.5vw] font-outfit font-medium text-primary tracking-widest uppercase">Explore Detail</span>
              <div className="h-[1px] w-[2vw] bg-primary animate-pulse" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Index;
