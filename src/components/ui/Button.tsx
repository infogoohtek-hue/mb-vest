"use client";

import React, { forwardRef } from "react";
import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "gold" | "outline" | "ghost" | "danger";
export type ButtonSize = "xs" | "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  isFullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "bg-stone-950 hover:bg-black text-white border border-stone-950 shadow-xs active:scale-[0.99]",
  secondary: "bg-stone-100 hover:bg-stone-200 text-stone-900 border border-stone-200 active:scale-[0.99]",
  gold: "bg-accent-gold hover:bg-accent-goldLight text-stone-950 font-bold border border-accent-gold active:scale-[0.99]",
  outline: "bg-transparent hover:bg-stone-950 hover:text-white text-stone-900 border border-stone-900 active:scale-[0.99]",
  ghost: "bg-transparent hover:bg-stone-100 text-stone-800 hover:text-black border border-transparent",
  danger: "bg-red-600 hover:bg-red-700 text-white border border-red-600 active:scale-[0.99]",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  xs: "text-[10px] tracking-wider py-1.5 px-3",
  sm: "text-xs tracking-[0.14em] py-2.5 px-4",
  md: "text-xs tracking-[0.18em] py-3.5 px-6",
  lg: "text-sm tracking-[0.2em] py-4 px-8",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      isLoading = false,
      isFullWidth = false,
      iconLeft,
      iconRight,
      href,
      target,
      rel,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    const baseClasses = `
      inline-flex items-center justify-center uppercase font-bold
      transition-all duration-200 select-none cursor-pointer
      focus:outline-none focus:ring-2 focus:ring-stone-900 focus:ring-offset-1
      disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed
      ${VARIANT_CLASSES[variant]}
      ${SIZE_CLASSES[size]}
      ${isFullWidth ? "w-full" : ""}
      ${className}
    `.trim();

    const content = (
      <>
        {isLoading ? (
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
        ) : (
          iconLeft && <span className="mr-2 inline-flex items-center">{iconLeft}</span>
        )}
        <span>{children}</span>
        {!isLoading && iconRight && <span className="ml-2 inline-flex items-center">{iconRight}</span>}
      </>
    );

    if (href) {
      return (
        <Link href={href} target={target} rel={rel} className={baseClasses}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={baseClasses}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
