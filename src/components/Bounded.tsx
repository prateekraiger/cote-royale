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
          "px-4 sm:px-6 lg:px-8",
          className,
        )}
        {...restProps}
      >
        <div className="mx-auto w-full max-w-5xl">{children}</div>
      </Comp>
    );
  },
);

Bounded.displayName = "Bounded";
