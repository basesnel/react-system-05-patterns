import type { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

const Card = ({ title, children }: Props) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        borderRadius: "5px",
        marginBottom: "10px",
      }}
    >
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export { Card };
