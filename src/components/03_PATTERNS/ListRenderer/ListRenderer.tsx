import type { JSX } from "react";

type Props<T> = {
  items: T[];
  render: (data: T | null) => JSX.Element;
};

// Render Props - pattern
function ListRenderer<T>({ items, render }: Props<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
}

export { ListRenderer };
