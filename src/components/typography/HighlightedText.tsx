import type { ReactNode } from "react";

export type HighlightedTextProps = {
  children: ReactNode;
};

export default function HighlightedText(props: HighlightedTextProps) {
  return (
    <span className="relative z-[1]">
      {props.children}{" "}
      <hr className="h-2 absolute bottom-2 left-0 bg-app-yellow border-none w-full z-[-1]" />
    </span>
  );
}
