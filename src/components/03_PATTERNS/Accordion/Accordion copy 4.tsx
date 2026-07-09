import type { ReactNode } from "react";
import React, { createContext, useContext, useState, useRef } from "react";

interface AccordionContextType {
  openItem: string | null;
  toggleItem: (value: string) => void;
  accordionId: string;
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

  const accordionId = useRef(
    `accordion-${Math.random().toString(36).substr(2, 9)}`,
  );

  const toggleItem = (value: string) => {
    setOpenItem((prev) => (prev === value ? null : value));
  };

  return (
    <AccordionContext.Provider
      value={{ openItem, toggleItem, accordionId: accordionId.current }}
    >
      <div id={accordionId.current} className="accordion-root">
        {children}
      </div>
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
      <div className="accordion-item" data-value={value}>
        {children}
      </div>
    </ItemContext.Provider>
  );
};

const AccordionTrigger = ({ children }: SubComponentProps) => {
  const { openItem, toggleItem, accordionId } = useAccordion();
  const value = useItemContext();

  const isOpen = openItem === value;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    const root = document.getElementById(accordionId);
    if (!root) return;

    const triggers = Array.from(
      root.querySelectorAll(`.accordion-trigger-btn`),
    ) as HTMLButtonElement[];

    const currentIndex = triggers.indexOf(event.currentTarget);

    let nextIndex: number | null = null;

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        nextIndex = (currentIndex + 1) % triggers.length;
        break;

      case "ArrowUp":
        event.preventDefault();
        nextIndex = (currentIndex - 1 + triggers.length) % triggers.length;
        break;

      case "Home":
        event.preventDefault();
        nextIndex = 0;
        break;

      case "End":
        event.preventDefault();
        nextIndex = triggers.length - 1;
        break;

      default:
        return;
    }

    if (nextIndex !== null && triggers[nextIndex]) {
      triggers[nextIndex].focus();
    }
  };

  return (
    <h3>
      <button
        type="button"
        id={`accordion-trigger-${value}`}
        aria-expanded={isOpen}
        aria-controls={`accordion-panel-${value}`}
        onClick={() => toggleItem(value)}
        onKeyDown={handleKeyDown}
        className="accordion-trigger-btn"
      >
        {children}{" "}
        <span aria-hidden="true">{openItem === value ? "🔼" : "🔽"}</span>
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
      className="accordion-panel-content"
    >
      <div className="accordion-panel-inner">{children}</div>
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
