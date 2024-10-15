import { cn } from "@/utils/cn";
import { InputHTMLAttributes } from "react";

interface Input extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  variant?: "primary" | "secondary" | "tertiary";
  leftEl?: JSX.Element | null;
  rightEl?: JSX.Element | null;
}

const Input = ({
  variant,
  error,
  className,
  leftEl = null,
  rightEl = null,
  ...rest
}: Input) => {
  return (
    <div
      className={cn("flex items-center relative rounded", className, {
        "bg-gray-400 text-gray-100": variant === "primary",
        "bg-gray-200 text-gray-400": variant === "secondary",
      })}
    >
      <div className="absolute z-10 left-4">{leftEl}</div>
      <input
        className={cn(
          "bg-transparent size-full border z-20 border-transparent focus:placeholder:text-transparent rounded focus:border-green-100 paragraph-sm min-h-10 px-4 py-2 focus:outline-none hover:border-green-100 duration-200",
          {
            "border-red-500": error,
            "pl-14": !!leftEl,
          }
        )}
        {...rest}
      />
      <div className="right-4 absolute">{rightEl}</div>
    </div>
  );
};

export default Input;
