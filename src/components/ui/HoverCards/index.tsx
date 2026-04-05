import { FC, SVGProps, useState } from 'react';

import { cn } from '@/shared/utils';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
  cards: { title: string; icon: FC<SVGProps<SVGSVGElement>>; description: string }[];
  wrapperClasses?: string;
  itemClasses?: string;
}

const Index: FC<Props> = ({ cards, itemClasses, wrapperClasses }) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className={cn('grid md:grid-cols-2 gap-4', itemClasses)}>
      {cards.map((card, idx) => (
        <div
          key={idx}
          className={cn('relative flex flex-col p-[1vw] md:p-[2vw] last:col-span-2 md:col-span-2 group', itemClasses)}
          onMouseEnter={() => setHoveredIdx(idx)}
          onMouseLeave={() => setHoveredIdx(null)}
        >
          <AnimatePresence>
            {hoveredIdx === idx && (
              <motion.span
                className={cn(
                  'absolute inset-0 z-0 block h-full w-full rounded-2xl bg-onyx/40 border border-primary/20 backdrop-blur-sm',
                  wrapperClasses,
                )}
                layoutId="cardHoverEffect"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.2 },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                  transition: { duration: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div
            className={cn(
              'z-[1] h-full flex flex-col gap-[1.5vw] md:gap-[3vw] rounded-2xl border border-stroke/20 px-[2.5vw] py-[3vw] transition-all duration-500 group-hover:border-primary/30 bg-bg-2/30',
            )}
          >
            <div className="flex items-center gap-[1.2vw] md:gap-[2vw]">
              <div className="text-primary scale-125 md:scale-150 transition-transform duration-500 group-hover:scale-110">
                <card.icon />
              </div>
              <h6 className="text-[1.8vw] md:text-[4vw] font-outfit font-bold tracking-tight text-text-1">{card.title}</h6>
            </div>
            <p className="text-[1.1vw] md:text-[2.8vw] font-inter font-light leading-[1.6] text-text-1/70 group-hover:text-text-1 transition-colors duration-500">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Index;
