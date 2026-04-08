import { useState, type ReactNode } from "react";

interface HoverBoxProps {
  render: (isHovered: boolean) => ReactNode;
}

function HoverBox({ render }: HoverBoxProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: "10px",
        border: "1px solid black",
        display: "inline-block",
        cursor: "pointer",
      }}
    >
      {render(isHovered)}
    </div>
  );
}

export { HoverBox };
