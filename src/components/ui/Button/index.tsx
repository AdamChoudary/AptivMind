import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  title: string;
  btnClasses?: string;
  classes?: string;
}

const Index: FC<Props> = ({ title, classes, btnClasses, ...props }) => {
  return (
    <button
      className={`relative inline-flex overflow-hidden rounded-full p-[1px] md:p-[2px] text-[1.4vw] md:text-[3vw] uppercase focus:outline-none focus:ring-2 focus:ring-primary/50 transition-transform active:scale-95 ${btnClasses}`}
      {...props}
    >
      <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--primary)_0%,var(--onyx)_50%,var(--primary)_100%)]" />
      <span
        className={`inline-flex h-full min-h-[3.5vw] md:min-h-[10vw] cursor-pointer items-center justify-center rounded-full font-outfit font-bold tracking-[0.2em] text-text-1 backdrop-blur-3xl transition duration-500 bg-bg-1/90 hover:bg-transparent hover:text-bg-1 ${classes}`}
      >
        {title}
      </span>
    </button>
  );
};
export default Index;
