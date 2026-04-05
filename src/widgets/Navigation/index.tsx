'use client';
import { FC, useEffect, useState } from 'react';

import SidebarMenu from '@/components/SidebarMenu';
import { AnimatePresence } from 'framer-motion';
import { LogoIcon } from '@/icons/ApproachIcons/LogoIcon';

interface Props {}

const Index: FC<Props> = () => {
  const [isActive, setIsActive] = useState(false);
  const closeSidebar = () => setIsActive(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsActive(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div>
      <div className="fixed right-0 z-[4001] p-[3vw]">
        <button
          type="button"
          onClick={() => setIsActive(!isActive)}
          className={`flex h-[5vw] w-[5vw] md:h-[12vw] md:w-[12vw] cursor-pointer items-center justify-center rounded-full border border-primary/20 bg-bg-2/40 backdrop-blur-xl hover:bg-primary/10 transition-all duration-500 shadow-xl ${isActive ? 'scale-90 border-primary/50' : ''}`}
        >
          <div className={`burger ${isActive && 'burgerActive'}`}></div>
        </button>
      </div>
      <button 
        title="AptivMind" 
        className="p-[1.5vw] md:p-[4vw] fixed z-[100] top-[1.5vw] left-[1.5vw] group rounded-2xl overflow-hidden transition-all duration-500 hover:bg-primary/[0.05] hover:shadow-[0_0_50px_-15px_rgba(179,159,132,0.15)]"
      >
        <LogoIcon className="w-[10vw] h-[5vw] md:w-[25vw] md:h-[12vw] group-hover:scale-[1.03] transition-transform duration-700" />
      </button>
      <AnimatePresence mode="wait">
        {isActive && <SidebarMenu close={closeSidebar} />}
      </AnimatePresence>
    </div>
  );
};
export default Index;
