import type { ReactNode } from "react";

type GradientBorderRingProps = {
  children?: ReactNode;
};

export default function GradientBorderRing({ children }: GradientBorderRingProps) {
  return (
    <span
      className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{ margin: "-2px" }}
    >
      <span className="flex w-full h-full rounded-full bg-bg items-center justify-center">
        {children}
      </span>
    </span>
  );
}
