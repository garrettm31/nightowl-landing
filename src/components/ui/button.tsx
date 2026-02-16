import { clsx } from "clsx";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function Button({ children, variant = "primary", href, className, onClick }: Props) {
  const base = "inline-flex items-center justify-center rounded-full text-[15px] font-medium transition-all";
  const variants = {
    primary:
      "bg-owl-500 px-7 py-3 text-white hover:bg-owl-400 hover:shadow-lg hover:shadow-owl-500/25",
    secondary:
      "border border-night-600 px-7 py-3 text-night-200 hover:bg-night-800 hover:border-night-500",
  };

  const classes = clsx(base, variants[variant], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
