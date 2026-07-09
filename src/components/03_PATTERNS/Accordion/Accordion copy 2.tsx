import type { ReactNode } from "react";
import { createContext, useContext, useState } from "react";

interface AccordionContextType {
  openItem: string | null;
  toggleItem: (value: string) => void;
}

const AccordionContext = createContext<AccordionContextType | null>(null);

interface AccordionProps {
  children: ReactNode;
  defaultValue?: string | null;
}

const Accordion = ({ children, defaultValue = null }: AccordionProps) => {
  const [openItem, setOpenItem] = useState(defaultValue);

  const toggleItem = (value: string) => {
    setOpenItem((prev) => (prev === value ? null : value));
  };

  return (
    <AccordionContext.Provider value={{ openItem, toggleItem }}>
      <div>{children}</div>
    </AccordionContext.Provider>
  );
};

const useAccordion = (): AccordionContextType => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(
      "Accordion subcomponents must be rendered inside <Accordion />",
    );
  }
  return context;
};

interface SubComponentProps {
  value: string;
  children: ReactNode;
}

const AccordionItem = ({ value, children }: SubComponentProps) => {
  return <div data-value={value}>{children}</div>;
};

const AccordionTrigger = ({ value, children }: SubComponentProps) => {
  const { openItem, toggleItem } = useAccordion();

  return (
    <button onClick={() => toggleItem(value)}>
      {children} {openItem === value ? "-" : "+"}
    </button>
  );
};

const AccordionContent = ({ value, children }: SubComponentProps) => {
  const { openItem } = useAccordion();
  if (openItem !== value) return null;
  return <div>{children}</div>;
};

type AccordionComponent = typeof Accordion & {
  Item: typeof AccordionItem;
  Trigger: typeof AccordionTrigger;
  Content: typeof AccordionContent;
};

const CompaundAccordion = Accordion as AccordionComponent;

CompaundAccordion.Item = AccordionItem;
CompaundAccordion.Trigger = AccordionTrigger;
CompaundAccordion.Content = AccordionContent;

export { CompaundAccordion as Accordion };
