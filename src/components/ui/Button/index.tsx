import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  title: string;
  btnClasses?: string;
  classes?: string;
}

const Index: FC<Props> = ({ title, classes, btnClasses, ...props }) => {
  return (
    <button
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[2px] md:p-[3px] transition-all duration-500 hover:scale-[1.02] active:scale-95 ${btnClasses}`}
      {...props}
    >
      {/* Animated Gradient Border */}
      <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--primary)_0%,rgba(179,159,132,0.1)_45%,var(--primary)_50%,rgba(179,159,132,0.1)_95%,var(--primary)_100%)]" />
      
      {/* Inner Button Shield */}
      <span
        className={`inline-flex w-full h-full min-h-[4vw] md:min-h-[11vw] cursor-pointer items-center justify-center rounded-full bg-bg-1/95 px-[4vw] py-[1.2vw] md:px-[8vw] md:py-[3vw] text-[1.1vw] md:text-[3.2vw] font-outfit font-black tracking-[0.25em] text-text-1 backdrop-blur-3xl transition duration-500 group-hover:bg-transparent group-hover:text-bg-1 ${classes}`}
      >
        {title}
      </span>
    </button>
  );
};
export default Index;
