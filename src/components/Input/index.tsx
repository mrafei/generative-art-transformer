import type { FC, InputHTMLAttributes, ReactEventHandler } from "react";

type EventHandler = ReactEventHandler<HTMLInputElement>;

interface OnChange {
  (value: string): ReturnType<EventHandler>;
}
interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label?: string;
  onChange?: OnChange;
}
const Input: FC<InputProps> = (props) => {
  const { label, onChange, ...restProps } = props;
  return (
    <div>
      <div className="text-sm mb-1">{label}</div>
      <input
        className="block min-h-[auto] w-full rounded border-2 border-gray-200 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        {...restProps}
        onChange={(e) => {
          return onChange?.(e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
