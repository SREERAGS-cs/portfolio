import * as React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "accent";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer";

    const variantStyles = {
      default:
        "bg-white text-neutral-950 shadow hover:bg-neutral-200",
      destructive:
        "bg-red-600 text-white shadow-sm hover:bg-red-700",
      outline:
        "border border-white/20 bg-transparent text-white shadow-sm hover:bg-white/10 hover:border-white/30",
      secondary:
        "bg-white/10 text-white shadow-sm hover:bg-white/20",
      ghost: "hover:bg-white/10 text-neutral-300 hover:text-white",
      link: "text-cyan-400 underline-offset-4 hover:underline",
      accent:
        "bg-gradient-to-r from-cyan-500 to-blue-600 text-neutral-950 font-semibold shadow-lg shadow-cyan-500/25 hover:from-cyan-400 hover:to-blue-500",
    };

    const sizeStyles = {
      default: "h-10 px-5 py-2",
      sm: "h-8 rounded-full px-3.5 text-xs",
      lg: "h-12 rounded-full px-8 text-base",
      icon: "h-9 w-9",
    };

    return (
      <button
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };

