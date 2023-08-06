import type { ButtonHTMLAttributes, FC } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
const Button: FC<ButtonProps> = (props) => {
  const { children, ...restProps } = props;
  return (
    <button
      type="button"
      className="inline-block rounded border-2 border-red-600 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-red-600 transition duration-150 ease-in-out [&:not(:disabled)]:hover:border-red-600 [&:not(:disabled)]:hover:bg-neutral-500 [&:not(:disabled)]:hover:bg-opacity-10 [&:not(:disabled)]:hover:text-red-600 disabled:border-gray-200 disabled:text-gray-400"
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
