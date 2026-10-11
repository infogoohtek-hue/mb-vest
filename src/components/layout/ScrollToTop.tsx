"use client";

import React, { useState, useEffect } from "react";

export const ScrollToTop: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    let lastShow = false;
    const handleScroll = () => {
      const show = window.scrollY > 350;
      if (show !== lastShow) {
        lastShow = show;
        setShowScroll(show);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <aside
      aria-label="Kênh liên hệ nhanh"
      className="fixed bottom-6 right-3.5 sm:right-5 z-50 flex flex-col items-center gap-2.5 select-none"
    >
      {/* 1. Scroll to top button (Visible on scroll) */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Cuộn lên đầu trang"
        className={`w-9 h-9 rounded-full bg-stone-900/90 hover:bg-black text-stone-200 hover:text-white border border-stone-700/80 shadow-md backdrop-blur-xs flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group relative ${
          showScroll ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3.5 h-3.5 text-stone-300 group-hover:text-amber-300 transition-colors"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="absolute right-full mr-3 bg-stone-900 text-white text-[11px] font-medium px-2.5 py-1 rounded shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-stone-700">
          Đầu trang
        </span>
      </button>

      {/* 2. Zalo Chat Button with iconic speech bubble and Zalo wordmark */}
      <a
        href="https://zalo.me/0904989326"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat Zalo tư vấn 1-1 với MB VEST"
        className="relative group w-11.5 h-11.5 sm:w-12 sm:h-12 rounded-full bg-[#0068FF] hover:bg-[#0054d1] flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-108 active:scale-95"
      >
        {/* Subtle Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#0068FF]/30 animate-pulse-glow -z-10 pointer-events-none" />

        {/* Crisp Zalo Speech Bubble with Zalo Typography */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 sm:w-7.5 sm:h-7.5 select-none drop-shadow-xs"
        >
          {/* White Speech Bubble Container */}
          <path
            d="M12 3C6.477 3 2 6.582 2 11c0 2.413 1.328 4.545 3.398 5.867C5.07 18.258 4.14 19.53 4 19.75a.5.5 0 00.58.746c1.285-.386 3.098-1.258 4.297-2.02A11.39 11.39 0 0012 19c5.523 0 10-3.582 10-8s-4.477-8-10-8z"
            fill="white"
          />
          {/* Official Blue "Zalo" Typography */}
          <g transform="translate(12, 10.6) scale(0.65) translate(-12, -12)">
            <path
              d="M12.49 10.2722v-.4496h1.3467v6.3218h-.7704a.576.576 0 01-.5763-.5729l-.0006.0005a3.273 3.273 0 01-1.9372.6321c-1.8138 0-3.2844-1.4697-3.2844-3.2823 0-1.8125 1.4706-3.2822 3.2844-3.2822a3.273 3.273 0 011.9372.6321l.0006.0005zM6.9188 7.7896v.205c0 .3823-.051.6944-.2995 1.0605l-.03.0343c-.0542.0615-.1815.206-.2421.2843L2.024 14.8h4.8948v.7682a.5764.5764 0 01-.5767.5761H0v-.3622c0-.4436.1102-.6414.2495-.8476L4.8582 9.23H.1922V7.7896h6.7266zm8.5513 8.3548a.4805.4805 0 01-.4803-.4798v-7.875h1.4416v8.3548H15.47zM20.6934 9.6C22.52 9.6 24 11.0807 24 12.9044c0 1.8252-1.4801 3.306-3.3066 3.306-1.8264 0-3.3066-1.4808-3.3066-3.306 0-1.8237 1.4802-3.3044 3.3066-3.3044zm-10.1412 5.253c1.0675 0 1.9324-.8645 1.9324-1.9312 0-1.065-.865-1.9295-1.9324-1.9295s-1.9324.8644-1.9324 1.9295c0 1.0667.865 1.9312 1.9324 1.9312zm10.1412-.0033c1.0737 0 1.945-.8707 1.945-1.9453 0-1.073-.8713-1.9436-1.945-1.9436-1.0753 0-1.945.8706-1.945 1.9453z"
              fill="#0068FF"
            />
          </g>
        </svg>

        {/* Hover Tooltip */}
        <span className="absolute right-full mr-3.5 bg-stone-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-stone-700/80">
          Chat Zalo 1-1 tư vấn
        </span>
      </a>

      {/* 3. Direct Hotline Call Button */}
      <a
        href="tel:0904989326"
        aria-label="Gọi hotline Mr. Bình: 0904 989 326"
        className="relative group w-11.5 h-11.5 sm:w-12 sm:h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-108 active:scale-95"
      >
        {/* Subtle Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-pulse-glow -z-10 pointer-events-none" />

        {/* Phone Icon */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white group-hover:rotate-12 transition-transform duration-200"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>

        {/* Hover Tooltip */}
        <span className="absolute right-full mr-3.5 bg-stone-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-stone-700/80">
          Gọi: 0904 989 326
        </span>
      </a>
    </aside>
  );
};
