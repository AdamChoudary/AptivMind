import { FC, ImgHTMLAttributes } from "react";

export const LogoIcon: FC<ImgHTMLAttributes<HTMLImageElement>> = (props) => (
  <img 
    src="/images/logo-1.png" 
    alt="AptivMind Logo" 
    {...props} 
    className={`object-contain ${props.className || ''}`}
  />
);

