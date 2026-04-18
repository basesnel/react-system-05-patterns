import type { JSX } from "react";

type Props<T> = {
  items: T[];
  render: (data: T | null) => JSX.Element;
};

// Render Props - pattern
const ListRenderer = <T,>({ items, render }: Props<T>) => {
  return (
    <ul>
      {items.map((item: T, index: number) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
};

export { ListRenderer };
