import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-4xl font-light leading-tight decoration-neutral-400 decoration-from-font underline-offset-1 group-hover:underline">
      {children}
    </h1>
  );
}
