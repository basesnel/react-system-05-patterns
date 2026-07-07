import type { JSX } from "react";

type Props = {
  children: JSX.Element | JSX.Element[];
};

type ItemProps = {
  title: string;
  children: React.ReactNode;
  isActive: boolean;
  onToggle: () => void;
};

// interface ItemType {
//   ({ title, children, isActive, onToggle }: ItemProps): JSX.Element;
//   displayName: string;
// }

const Accordion = ({ children }: Props) => {
  return <div>{children}</div>;
};

Accordion.Item = ({ title, children, isActive, onToggle }: ItemProps) => (
  <div>
    <div onClick={onToggle}>
      <h3>{title}</h3>
      <span>{isActive ? "-" : "+"}</span>
    </div>
    {isActive && <div>{children}</div>}
  </div>
);

// Accordion.Item.displayName: string = "AccordionItem";

export { Accordion };
