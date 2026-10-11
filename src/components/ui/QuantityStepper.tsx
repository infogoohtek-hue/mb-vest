"use client";

import React from "react";
import { IconMinus, IconPlus } from "../icons/Icons";

export interface QuantityStepperProps {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
  className?: string;
  size?: "sm" | "md";
}

export const QuantityStepper: React.FC<QuantityStepperProps> = ({
  value,
  min = 1,
  max = 99,
  onChange,
  className = "",
  size = "md",
}) => {
  const handleDecrement = () => {
    if (value > min) onChange(value - 1);
  };

  const handleIncrement = () => {
    if (value < max) onChange(value + 1);
  };

  const sizeClasses = size === "sm" ? "px-2 py-1 text-xs" : "px-3 py-1.5 text-xs";

  return (
    <div
      className={`inline-flex items-center border border-stone-300 rounded select-none bg-white ${className}`}
    >
      <button
        type="button"
        onClick={handleDecrement}
        disabled={value <= min}
        aria-label="Decrease quantity"
        className={`${sizeClasses} text-stone-500 hover:text-black disabled:opacity-30 disabled:cursor-not-allowed transition-colors focus:outline-none`}
      >
        <IconMinus className="w-2.5 h-2.5" />
      </button>

      <span className="px-2 font-mono font-bold text-stone-900 min-w-[24px] text-center text-xs">
        {value}
      </span>

      <button
        type="button"
        onClick={handleIncrement}
        disabled={value >= max}
        aria-label="Increase quantity"
        className={`${sizeClasses} text-stone-500 hover:text-black disabled:opacity-30 disabled:cursor-not-allowed transition-colors focus:outline-none`}
      >
        <IconPlus className="w-2.5 h-2.5" />
      </button>
    </div>
  );
};
