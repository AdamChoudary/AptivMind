import { FC } from 'react';
import { useRouter } from 'next/navigation';

import Button from '@/components/ui/Button';
import SectionOpacity from '@/components/ui/SectionOpacity';

interface Props {}

const Index: FC<Props> = () => {
  const router = useRouter();

  const handleFormToggle = () => {
    router.push('/book');
  };

  return (
    <SectionOpacity classes="flex flex-col justify-center h-screen bg-[radial-gradient(circle_at_bottom,var(--burgundy)_0%,var(--bg-1)_100%)] overflow-hidden">
      
      <div className="relative z-10 mx-auto flex w-full max-w-[75vw] md:max-w-[90%] flex-1 flex-col items-center justify-center text-center -translate-y-[2vw]">
        <h3 className="text-[7vw] md:text-[12vw] font-outfit font-black tracking-tighter text-text-1 leading-none uppercase">
          Ready to <span className="text-primary italic">Scale?</span>
        </h3>
        <p className="mt-[2vw] text-[1.4vw] md:text-[3.5vw] font-inter font-light text-text-1/60 max-w-[70%] leading-relaxed tracking-tight">
          Partner with AptivMind to integrate advanced <span className="text-text-1 font-normal underline decoration-primary/40 underline-offset-4">AI agents</span> and high-performance digital infrastructure into your workflow. 
        </p>
        
        <div className="mt-[4vw] md:mt-[8vw]">
          <Button
            onClick={handleFormToggle}
            title="START YOUR PROJECT"
            classes="px-[5vw] py-[1.5vw] md:py-[4vw] md:px-[12vw]"
          />
        </div>
      </div>

      <footer className="relative z-10 flex justify-between items-center border-t border-white/[0.05] px-[8vw] py-[4vw] text-[0.85vw] md:text-[2.8vw] font-outfit font-medium text-text-1/40 uppercase tracking-[0.2em]">
        <div className="flex flex-col gap-[0.5vw]">
          <span className="text-text-1/20 font-light">© 2024 APTIVMIND.</span>
          <span className="text-[0.7vw] md:text-[2.2vw] normal-case tracking-normal text-text-1/20">Crafting Intelligence, Scaling Success.</span>
        </div>
        
        <div className="flex items-center gap-[6vw] md:gap-[4vw]">
          <a 
            href="https://www.instagram.com/aptivmind/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-[0.8vw] transition-all duration-500 hover:text-primary"
          >
            <span className="w-[1.2vw] h-[1.2vw] md:w-[4vw] md:h-[4vw] rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
              <div className="w-[0.5vw] h-[0.5vw] bg-primary group-hover:bg-bg-1 rounded-full"></div>
            </span>
            INSTAGRAM
          </a>
          <a 
            href="mailto:chaudhrayadam@gmail.com"
            className="group flex items-center gap-[0.8vw] transition-all duration-500 hover:text-primary"
          >
            <span className="w-[1.2vw] h-[1.2vw] md:w-[4vw] md:h-[4vw] rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
              <div className="w-[0.5vw] h-[0.5vw] bg-primary group-hover:bg-bg-1 rounded-full"></div>
            </span>
            GET IN TOUCH
          </a>
        </div>
      </footer>
    </SectionOpacity>
  );
};
export default Index;
