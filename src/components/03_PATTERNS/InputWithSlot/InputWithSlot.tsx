import type { JSX } from "react";

type Props = {
  label?: string;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
};

const InputWithSlot = ({
  label,
  iconLeft,
  iconRight,
  ...props
}: Props & React.ComponentProps<"input">) => (
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
