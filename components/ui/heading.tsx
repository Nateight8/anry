import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

const h2Variants = cva("font-heading ", {
  variants: {
    size: {
      default: "text-6xl md:text-7xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface H2Heading
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof h2Variants> {}

const H2 = forwardRef<HTMLHeadingElement, H2Heading>(
  ({ children, className, size, ...props }, ref) => {
    return (
      <h2 ref={ref} {...props} className={cn(h2Variants({ size, className }))}>
        {children}
      </h2>
    );
  }
);

H2.displayName = "H2";

export { H2, h2Variants };
