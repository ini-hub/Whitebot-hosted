import type { ButtonHTMLAttributes } from "react";

type BaseButtonProps = Omit<
  { activeHover?: boolean } & ButtonHTMLAttributes<HTMLButtonElement>,
  "className"
>;

export default function BaseButton(props: BaseButtonProps) {
  const { activeHover, ...buttonProps } = props;
  return (
    <button
      className={`text-xs bg-app-purple rounded-full py-2.5 px-6 font-medium hover:bg-white border-2 border-transparent ${
        activeHover
          ? "border-app-yellow text-app-purple bg-white"
          : "hover:border-app-yellow hover:text-app-purple text-white"
      }  transition-colors duration-200`}
      {...buttonProps}
    />
  );
}
