"use client";

import React from "react";

export type BadgeVariant = "primary" | "sale" | "new" | "gold" | "outline" | "subtle";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  primary: "bg-stone-950 text-white",
  sale: "bg-stone-950 text-white",
  new: "bg-stone-950 text-white",
  gold: "bg-stone-950 text-white",
  outline: "border border-stone-950 text-stone-950 bg-transparent",
  subtle: "bg-stone-900 text-white",
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "primary",
  className = "",
}) => {
  return (
    <span
      className={`
        inline-flex items-center text-[9px] uppercase tracking-wider font-bold
        px-2 py-0.5 select-none
        ${VARIANT_CLASSES[variant]}
        ${className}
      `.trim()}
    >
      {children}
    </span>
  );
};
