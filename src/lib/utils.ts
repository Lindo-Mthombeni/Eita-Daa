import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function style(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "secondary";
  children: React.ReactNode;
  effect: Boolean;
  className?: string;
};