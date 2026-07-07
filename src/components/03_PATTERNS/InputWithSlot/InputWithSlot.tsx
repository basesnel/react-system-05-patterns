import type { JSX } from "react";

interface Props extends React.ComponentProps<"input"> {
  label?: string;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
}

// Slots
const InputWithSlot = ({ label, iconLeft, iconRight, ...props }: Props) => (
  <div>
    {label && <label>{label}</label>}
    <div>
      {iconLeft && <span>{iconLeft}</span>}
      <input {...props} />
      {iconRight && <span>{iconRight}</span>}
    </div>
  </div>
);

export { InputWithSlot };
