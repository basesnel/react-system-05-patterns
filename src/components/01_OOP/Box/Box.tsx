import type { ComponentPropsWithRef, ElementType, ReactNode } from "react";

type BoxProps<T extends ElementType> = {
  as?: T;
  children?: ReactNode;
} & ComponentPropsWithRef<T>;

function Box<T extends ElementType = "div">({
  as,
  children,
  ...props
}: BoxProps<T>) {
  const Component = as || "div";
  return <Component {...props}>{children}</Component>;
}

export { Box };
