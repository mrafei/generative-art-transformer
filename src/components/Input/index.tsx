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
  const { label, onChange, className = "", ...restProps } = props;
  return (
    <div>
      <div className="text-sm mb-1">{label}</div>
      <input
        {...restProps}
        className={`block min-h-[auto] w-full rounded border-2 border-gray-200 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none ${className}`}
        onChange={(e) => {
          return onChange?.(e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
