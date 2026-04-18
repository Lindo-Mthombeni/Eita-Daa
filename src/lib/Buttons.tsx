import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function styleMerge(...styles: ClassValue[]) {
  return twMerge(clsx(...styles));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  className,
  ...props
}) => {
  const baseStyles =
    "tracking-wide w-full h-full font-base transition-all duration-300 cursor-pointer flex items-center justify-center rounded-xl p-1 px-[1.2em]";

  const variantStyles = {
    primary: "bg-inherit ",
    secondary: "border-2 border-main text-main font-bold",
  };

  return (
    <button
      className={styleMerge(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
