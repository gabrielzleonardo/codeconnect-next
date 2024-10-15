import { cn } from "@/utils/cn";
import { ButtonHTMLAttributes } from "react";
import { Upload } from "lucide-react";

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "tertiary" | "upload";
  icon?: JSX.Element | null;
}

const styles = {
  primary: "bg-green-100 text-green-300 hover:bg-green-200",
  secondary:
    "bg-transparent text-green-100 hover:text-green-200 border border-green-100 hover:border-green-200",
  tertiary: "bg-gray-400 text-offwhite hover:bg-gray-300",
  upload:
    "bg-transparent border border-gray-200 text-gray-200 hover:bg-gray-200 hover:text-green-200",
};

const getDefaultIcon = (variant: Button["variant"]) => {
  if (variant === "upload")
    return <Upload width={18} height={24} color="currentColor" />;
  return null;
};

const Button = ({
  variant,
  children,
  className,
  icon = getDefaultIcon(variant),
  ...rest
}: Button) => {
  return (
    <button
      className={cn(
        "inline-flex relative justify-center items-center rounded-lg duration-300 font-semibold paragraph px-4 py-3",
        styles[variant],
        className
      )}
      {...rest}
    >
      {children}
      {icon && <div className="right-4 absolute">{icon}</div>}
    </button>
  );
};

export default Button;
