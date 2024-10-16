import { ButtonHTMLAttributes } from "react";

type IconButton = ButtonHTMLAttributes<HTMLButtonElement>;
const IconButton = ({ children, ...rest }: IconButton) => {
  return (
    <button {...rest} className="">
      {children}
    </button>
  );
};

export default IconButton;
