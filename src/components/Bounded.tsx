import { ElementType, ReactNode, forwardRef } from "react";
import clsx from "clsx";

type BoundedProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

export const Bounded = forwardRef<HTMLElement, BoundedProps>(
  ({ as: Comp = "section", className, children, ...restProps }, ref) => {
    return (
      <Comp
        ref={ref}
        className={clsx(
          "px-4 sm:px-6 lg:px-8 [.header+&]:pt-20 [.header+&]:sm:pt-24 [.header+&]:md:pt-32",
          className,
        )}
        {...restProps}
      >
        <div className="mx-auto w-full max-w-6xl">{children}</div>
      </Comp>
    );
  },
);

Bounded.displayName = "Bounded";
