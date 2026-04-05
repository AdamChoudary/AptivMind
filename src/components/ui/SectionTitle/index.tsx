import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  title: string;
  classes?: string;
}

const Index: FC<Props> = ({ title, classes, ...props }) => {
  const baseTitle = title.endsWith('.') ? title.slice(0, -1) : title;
  const hasDot = title.endsWith('.');

  return (
    <h3 
      className={`text-[8vw] md:text-[12vw] font-outfit font-black leading-none tracking-tighter text-text-1 md:text-center ${classes}`} 
      {...props}
    >
      {baseTitle}
      {hasDot && <span className="text-primary">.</span>}
    </h3>
  );
};
export default Index;
