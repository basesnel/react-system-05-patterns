import type { ReactNode } from "react";
import { createContext, useContext, useState } from "react";

interface AccordionContextType {
  openItem: string | null;
  toggleItem: (value: string) => void;
}

const AccordionContext = createContext<AccordionContextType | null>(null);

const useAccordion = (): AccordionContextType => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(
      "Accordion subcomponents must be rendered inside <Accordion />",
    );
  }
  return context;
};

interface AccordionProps {
  children: ReactNode;
  defaultValue?: string | null;
}

const Accordion = ({ children, defaultValue = null }: AccordionProps) => {
  const [openItem, setOpenItem] = useState<string | null>(defaultValue);

  const toggleItem = (value: string) => {
    setOpenItem((prev) => (prev === value ? null : value));
  };

  return (
    <AccordionContext.Provider value={{ openItem, toggleItem }}>
      <div>{children}</div>
    </AccordionContext.Provider>
  );
};

const ItemContext = createContext<string | null>(null);

const useItemContext = () => {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error(
      "Accordion subcomponents must be wrapped inside an <Accordion />",
    );
  }
  return context;
};

interface AccordionItemProps {
  value: string;
  children: ReactNode;
}

interface SubComponentProps {
  children: ReactNode;
}

const AccordionItem = ({ value, children }: AccordionItemProps) => {
  return (
    <ItemContext.Provider value={value}>
      <div data-value={value}>{children}</div>
    </ItemContext.Provider>
  );
};

const AccordionTrigger = ({ children }: SubComponentProps) => {
  const { openItem, toggleItem } = useAccordion();
  const value = useItemContext();

  const isOpen = openItem === value;

  return (
    <h3>
      <button
        type="button"
        id={`accordion-trigger-${value}`}
        aria-expanded={isOpen}
        aria-controls={`accordion-panel-${value}`}
        onClick={() => toggleItem(value)}
      >
        {children}{" "}
        <span aria-hidden="true">{openItem === value ? "-" : "+"}</span>
      </button>
    </h3>
  );
};

const AccordionContent = ({ children }: SubComponentProps) => {
  const { openItem } = useAccordion();
  const value = useItemContext();

  const isOpen = openItem === value;

  return (
    <div
      id={`accordion-trigger-${value}`}
      role="region"
      aria-labelledby={`accordion-trigger-${value}`}
      hidden={!isOpen}
    >
      <div>{children}</div>
    </div>
  );
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
