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
      <button title="AptivMind" className="p-[3vw] fixed z-[100] top-0 left-0 group">
        <LogoIcon className="w-[6vw] h-[6vw] md:w-[15vw] md:h-[15vw] group-hover:scale-105 transition-transform duration-500" />
      </button>
      <AnimatePresence mode="wait">
        {isActive && <SidebarMenu close={closeSidebar} />}
      </AnimatePresence>
    </div>
  );
};
export default Index;
