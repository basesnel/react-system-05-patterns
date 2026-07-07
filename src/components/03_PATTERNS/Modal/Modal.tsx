import type { JSX } from "react";

type Props = {
  headerSlot?: JSX.Element;
  footerSlot?: JSX.Element;
  children: JSX.Element | JSX.Element[];
};

const Modal = ({ children, headerSlot, footerSlot }: Props) => {
  return (
    <div>
      <div>{headerSlot}</div>
      <div>{children}</div>
      <div>{footerSlot}</div>
    </div>
  );
};

export { Modal };
