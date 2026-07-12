import React from "react";
import type { ReactNode } from "react";

interface AccordionProps {
  children: ReactNode;
}

type AccordionItemProps = {
  title: string;
  children: ReactNode;
  isActive: boolean;
  onToggle: () => void;
};

interface AccordionItemComponent extends React.FC<AccordionItemProps> {
  displayName: string;
}

interface AccordionComponent extends React.FC<AccordionProps> {
  Item: AccordionItemComponent;
}

// Compaund Component
const Accordion: AccordionComponent = ({ children }: AccordionProps) => {
  return <div>{children}</div>;
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  isActive,
  onToggle,
}: AccordionItemProps) => (
  <div>
    <div onClick={onToggle}>
      <h3>{title}</h3>
      <span>{isActive ? "-" : "+"}</span>
    </div>
    {isActive && <div>{children}</div>}
  </div>
);

AccordionItem.displayName = "AccordionItem";

Accordion.Item = AccordionItem as AccordionItemComponent;

export { Accordion };
