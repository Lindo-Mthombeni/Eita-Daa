import { forwardRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function styleMerge(...styles: ClassValue[]) {
  return twMerge(clsx(...styles));
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant, children, className, ...props }, ref) => {
    const baseStyles = "rounded-2xl flex p-6";

    const variantStyles = {
      primary: "bg-card p-10",
      secondary: "bg-foreground border border-outline",
    };

    return (
      <div
        ref={ref}
        className={styleMerge(
          baseStyles,
          variantStyles[variant],
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";
