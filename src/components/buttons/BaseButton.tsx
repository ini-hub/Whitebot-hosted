import type { ButtonHTMLAttributes } from "react";

type BaseButtonProps = Omit<
  {} & ButtonHTMLAttributes<HTMLButtonElement>,
  "className"
>;

export default function BaseButton(props: BaseButtonProps) {
  const { ...buttonProps } = props;
  return (
    <button
      className="text-sm text-white bg-app-purple rounded-full py-2 px-8 font-medium"
      {...buttonProps}
    />
  );
}
