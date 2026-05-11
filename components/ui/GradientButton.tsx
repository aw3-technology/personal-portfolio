"use client";

import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import GradientBorderRing from "./GradientBorderRing";

type GradientButtonOwnProps = {
  variant?: "outline" | "filled";
  active?: boolean;
  className?: string;
  children: ReactNode;
};

export type GradientButtonProps<E extends ElementType = "a"> =
  GradientButtonOwnProps & { as?: E } & Omit<
      ComponentPropsWithoutRef<E>,
      keyof GradientButtonOwnProps | "as"
    >;

const baseClasses =
  "group relative rounded-full transition-all duration-500 overflow-visible focus-ring";
const variantClasses: Record<"outline" | "filled", string> = {
  outline: "bg-bg border-2 border-stroke",
  filled: "bg-text text-bg",
};

export default function GradientButton<E extends ElementType = "a">({
  as,
  variant = "outline",
  active = false,
  className = "",
  children,
  ...rest
}: GradientButtonProps<E>) {
  const Component = (as ?? "a") as ElementType;
  return (
    <Component
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...rest}
    >
      <GradientBorderRing active={active} />
      {children}
    </Component>
  );
}
