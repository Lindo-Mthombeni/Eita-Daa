import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ButtonProps } from "./utils";

function styleMerge(...styles: ClassValue[]) {
  return twMerge(clsx(...styles));
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  effect,
  className,
  ...props
}) => {
  const baseStyles =
    "tracking-wide font-base transition-all duration-300 cursor-pointer flex items-center justify-center rounded-xl p-1 px-[1.2em]";

  const variantStyles = {
    primary: "bg-inherit ",
    secondary: "border border-outline font-bold",
  };

  return (
    <button
      className={styleMerge(baseStyles, variantStyles[variant], effect ? "hover:scale-hover active:scale-active" : "", className)}
      {...props}
    ><span>{children}</span>
    </button>
  );
};
