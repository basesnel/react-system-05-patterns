import type { JSX } from "react";

type Props = {
  header?: JSX.Element;
  footer?: JSX.Element;
  children: JSX.Element[];
};

// Slots - pattern
const Card = ({ header, footer, children }: Props) => (
  <div>
    {header && <div>{header}</div>}
    <div>{children}</div>
    {footer && <div>{footer}</div>}
  </div>
);

export { Card };
