import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-primary rounded-[70px] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border border-black text-black flex flex-col justify-center items-center p-0 text-[14px] leading-[17px]",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline:
          "flex flex-col justify-center items-center p-0 w-[140px] h-[32px] border border-[var(--color-primary)] text-[var(--color-primary)] text-[14px] leading-[17px]",
        secondary: "bg-white/10 text-white hover:bg-white/20",
        ghost: "hover:bg-white/10",
        link: "text-white underline-offset-4 hover:underline",
        primary: "btn-primary bg-primary text-white hover:bg-primary/90",
      },
      size: {
        default: "h-[32px] w-[140px] text-[14px] leading-[17px]",
        sm: "h-8 px-3 text-xs",
        lg: "h-10 px-6",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
