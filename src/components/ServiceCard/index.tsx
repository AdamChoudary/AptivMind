import { FC } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
  card: any;
}

const Index: FC<Props> = ({ card: { title, services, description, number, classes } }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div 
      ref={ref} 
      key={number} 
      className={`px-[6vw] md:px-[3vw] pb-[8vw] last:pb-[10vw] transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="flex justify-between items-end mb-[2vw]">
        <h4 className="text-[4vw] md:text-[6.5vw] font-outfit font-bold tracking-tight text-text-1">
          {title}
        </h4>
        <span className="text-[1.5vw] md:text-[3vw] font-outfit font-medium text-primary/60 tracking-widest uppercase">
          Service {number}
        </span>
      </div>

      <div className={`flex gap-[4vw] md:flex-col md:gap-0 pt-[3vw] border-t border-stroke/30 ${classes}`}>
        <div className="flex-1">
          <div className="grid grid-cols-1 gap-[2vw] md:gap-[4vw]">
            {services.map((group: string[], i: number) => (
              <ul key={i} className="flex flex-wrap gap-[3vw] md:gap-[5vw]">
                {group.map((s) => (
                  <li key={s} className="flex items-center gap-[0.8vw] group">
                    <div className="h-[0.8vw] w-[0.8vw] md:h-[1.5vw] md:w-[1.5vw] rounded-full border border-primary/40 group-hover:bg-primary transition-all duration-300"></div>
                    <p className="text-[1.2vw] md:text-[2.8vw] font-inter font-medium text-text-1 items-center uppercase tracking-wider">{s}</p>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="relative flex-[1.2] pt-[0.5vw]">
          <p className="relative z-10 text-[1.4vw] md:text-[3.2vw] font-inter font-light leading-[1.8] text-text-1/70 md:mt-[6vw]">
            {description}
          </p>
          <div className="absolute -right-[2vw] -top-[4vw] z-0 select-none pointer-events-none opacity-[0.03] text-[18vw] font-outfit font-black text-primary">
            {number}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
