import type { ReactNode } from "react";

type GradientBorderRingProps = {
  children?: ReactNode;
  active?: boolean;
};

export default function GradientBorderRing({ children, active = false }: GradientBorderRingProps) {
  const opacity = active
    ? "opacity-100"
    : "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100";
  return (
    <span
      className={`absolute inset-0 -m-[2px] rounded-full p-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-opacity duration-500 ${opacity}`}
    >
      <span className="flex w-full h-full rounded-full bg-bg items-center justify-center">
        {children}
      </span>
    </span>
  );
}
