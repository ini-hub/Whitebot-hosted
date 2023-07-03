import type { ButtonHTMLAttributes } from "react";

type BaseButtonProps = Omit<
  {} & ButtonHTMLAttributes<HTMLButtonElement>,
  "className"
>;

export default function BaseButton(props: BaseButtonProps) {
  const { ...buttonProps } = props;
  return (
    <button
      className="text-xs text-white bg-app-purple rounded-full py-2.5 px-6 font-medium hover:bg-white border-2 border-transparent hover:border-app-yellow hover:text-app-purple transition-colors duration-200"
      {...buttonProps}
    />
  );
}
