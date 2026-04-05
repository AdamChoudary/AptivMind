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
    <SectionOpacity classes="relative flex flex-col justify-center h-screen bg-bg-1 overflow-hidden">
      {/* Dynamic Background Texture */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_70%_120%,var(--burgundy)_0%,transparent_50%),radial-gradient(circle_at_0%_-20%,var(--midnight)_0%,transparent_50%)] opacity-40" />
      
      <div className="relative z-10 mx-auto flex w-full max-w-[75vw] md:max-w-[90%] flex-1 flex-col items-center justify-center text-center -translate-y-[2vw]">
        <h3 className="text-[7vw] md:text-[12vw] font-outfit font-black tracking-tighter text-text-1 leading-none">
          READY TO <span className="text-primary italic">SCALE?</span>
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

      <footer className="relative z-10 flex justify-between items-center border-t border-white/[0.05] px-[8vw] py-[3vw] text-[0.9vw] md:text-[2.5vw] font-outfit font-medium text-text-1/30 uppercase tracking-widest">
        <div>© 2024 APTIVMIND. ALL RIGHTS RESERVED.</div>
        <ul className="flex gap-[4vw]">
          <li className="hover:text-primary transition-colors cursor-pointer">LinkedIn</li>
          <li className="hover:text-primary transition-colors cursor-pointer">Twitter</li>
          <li className="hover:text-primary transition-colors cursor-pointer">Contact</li>
        </ul>
      </footer>
    </SectionOpacity>
  );
};
export default Index;
