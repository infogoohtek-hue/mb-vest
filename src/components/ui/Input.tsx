"use client";

import React, { forwardRef } from "react";
import { IconClose } from "../icons/Icons";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClear?: () => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      iconLeft,
      iconRight,
      onClear,
      className = "",
      id,
      value,
      ...props
    },
    ref
  ) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="w-full flex flex-col space-y-1.5 text-left">
        {label && (
          <label
            htmlFor={inputId}
            className="text-[11px] uppercase tracking-[0.15em] font-bold text-stone-700 select-none"
          >
            {label}
          </label>
        )}

        <div className="relative flex items-center w-full">
          {iconLeft && (
            <div className="absolute left-3.5 text-stone-400 pointer-events-none flex items-center">
              {iconLeft}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            value={value}
            className={`
              w-full text-xs font-medium text-stone-900 bg-white
              border transition-all duration-200
              placeholder:text-stone-400 focus:outline-none
              ${iconLeft ? "pl-10" : "pl-3.5"}
              ${iconRight || onClear ? "pr-10" : "pr-3.5"}
              py-3
              ${
                error
                  ? "border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500"
                  : "border-stone-300 focus:border-stone-900 focus:ring-1 focus:ring-stone-900"
              }
              ${className}
            `.trim()}
            {...props}
          />

          {onClear && value && (
            <button
              type="button"
              onClick={onClear}
              className="absolute right-3 text-stone-400 hover:text-stone-700 p-1 flex items-center justify-center focus:outline-none"
              tabIndex={-1}
              aria-label="Clear input"
            >
              <IconClose className="w-3.5 h-3.5" />
            </button>
          )}

          {!onClear && iconRight && (
            <div className="absolute right-3.5 text-stone-400 pointer-events-none flex items-center">
              {iconRight}
            </div>
          )}
        </div>

        {error && <p className="text-[11px] text-red-600 font-medium">{error}</p>}
        {!error && helperText && <p className="text-[11px] text-stone-500">{helperText}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
