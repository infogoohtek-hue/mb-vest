"use client";

import React, { useState, useEffect } from "react";
import { ANNOUNCEMENT_MESSAGES } from "../../data/mockData";
import {
  IconPhone,
  IconStore,
  IconChevronRight,
} from "../icons/Icons";

export const AnnouncementBar: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENT_MESSAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="announcement-bar select-none overflow-hidden border-b border-white/10 bg-stone-950 text-stone-200">
      <div className="mx-auto flex h-9 max-w-7xl items-center px-4 sm:px-6 lg:grid lg:h-10 lg:grid-cols-[240px_minmax(0,1fr)_240px] lg:px-8">
        {/* Direct contact */}
        <div className="hidden items-center lg:flex">
          <a
            href="tel:0904989326"
            className="group inline-flex items-center gap-2 whitespace-nowrap text-[11px] transition-colors hover:text-white"
            aria-label="Gọi hotline MB VEST: 0904 989 326"
          >
            <IconPhone className="h-3.5 w-3.5 text-[#c5a880]" />
            <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-stone-500 transition-colors group-hover:text-stone-300">
              Hotline
            </span>
            <span className="font-medium tracking-[0.06em]">0904 989 326</span>
            <span className="text-stone-500">· Mr. Bình</span>
          </a>
        </div>

        {/* One concise rotating message */}
        <div
          className="flex min-w-0 flex-1 items-center justify-center gap-2 text-center lg:px-6"
          aria-live="polite"
        >
          <span aria-hidden="true" className="hidden h-1 w-1 rotate-45 bg-[#c5a880] sm:block" />
          <span
            key={currentIndex}
            className="animate-fade-in truncate text-[10px] font-medium uppercase tracking-[0.12em] text-stone-300 motion-reduce:animate-none sm:text-[11px] sm:tracking-[0.15em]"
          >
            {ANNOUNCEMENT_MESSAGES[currentIndex]}
          </span>
        </div>

        {/* Store location */}
        <div className="hidden items-center justify-end lg:flex">
          <a
            href="https://www.google.com/maps/place/Nhà+may+MB+VEST/@20.7240575,105.8827778,152m/data=!3m1!1e3!4m6!3m5!1s0x3135c91dd951f101:0x78221c9f5e6cb5be!8m2!3d20.7240734!4d105.8824261!16s%2Fg%2F11whfs0_cr"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.14em] text-stone-400 transition-colors hover:text-white"
          >
            <IconStore className="h-3.5 w-3.5 text-[#c5a880]" />
            <span>Địa chỉ nhà may</span>
            <IconChevronRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none" />
          </a>
        </div>
      </div>
    </div>
  );
};
