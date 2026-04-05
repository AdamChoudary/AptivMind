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
    <SectionOpacity classes="flex flex-col justify-center h-screen bg-[radial-gradient(circle_at_bottom,_var(--burgundy)_0%,_var(--bg-1)_100%)]">

      <div className="mx-auto flex w-full max-w-[70vw] md:max-w-[90%] flex-1 flex-col items-center justify-center text-center">
        <h3 className="text-[6vw] md:text-[10vw] font-outfit font-black tracking-tighter text-text-1">
          READY TO SCALE?
        </h3>
        <p className="mt-[1vw] text-[1.5vw] md:text-[3.5vw] font-inter font-light text-text-1/70 max-w-[80%] leading-relaxed">
          Partner with AptivMind to integrate advanced AI agents and high-performance digital infrastructure into your workflow. Let&apos;s build the future of your business together.
        </p>
        <Button
          onClick={handleFormToggle}
          title="START YOUR PROJECT"
          classes="mt-[1.5vw] px-[4vw] py-[1.2vw] md:w-[70vw] rounded-full border border-primary/20 bg-bg-2 shadow-2xl hover:bg-primary hover:text-bg-1 transition-all duration-700 font-outfit font-black tracking-[0.3em] text-[1vw] md:text-[3vw]"
          btnClasses=""
        />
      </div>

      <footer className="flex justify-between items-center border-t border-stroke/20 px-[6vw] py-[2.5vw] text-[1.1vw] md:text-[2.5vw] font-inter text-text-1/40">
        <div>© 2024 APTIVMIND. ALL RIGHTS RESERVED.</div>
        <ul className="flex gap-[4vw] uppercase tracking-[0.2em]">
          <li className="hover:text-primary transition-colors cursor-pointer">LinkedIn</li>
          <li className="hover:text-primary transition-colors cursor-pointer">Twitter</li>
          <li className="hover:text-primary transition-colors cursor-pointer">Contact</li>
        </ul>
      </footer>
    </SectionOpacity>
  );
};
export default Index;
