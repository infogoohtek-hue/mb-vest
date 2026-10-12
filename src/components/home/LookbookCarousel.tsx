"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IconChevronRight } from "../icons/Icons";

const LOOKBOOK_ITEMS = [
  {
    id: 1,
    title: "Black Sartorial 3-Piece",
    subtitle: "Professional Business Attire",
    image: "/images/man_vest/image_1.png",
    link: "/collections/dich-vu",
    tag: "DOANH NHÂN",
  },
  {
    id: 2,
    title: "Classic Black Wedding Suit",
    subtitle: "Timeless Wedding Style",
    image: "/images/man_vest/image_3.png",
    objectPosition: "object-top",
    link: "/collections/dich-vu",
    tag: "SUIT CƯỚI",
  },
  {
    id: 3,
    title: "Royal Blue Linen–Wool",
    subtitle: "Pleated Patch Pockets",
    image: "/images/man_vest/image_6.jpg",
    objectPosition: "object-top",
    link: "/collections/dich-vu",
    tag: "SIGNATURE",
  },
  {
    id: 4,
    title: "Plum Burgundy 3-Piece",
    subtitle: "Wide Curved Peak Lapels",
    image: "/images/man_vest/image_2.jpg",
    link: "/collections/dich-vu",
    tag: "SARTORIAL VIP",
  },
];

export const LookbookCarousel: React.FC = () => {
  return (
    <section 
      className="lookbook-carousel-section relative py-12 md:py-16 overflow-hidden bg-transparent"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* ============================================================= */}
        {/* 1. STYLED BRANDING HEADER (MATCHING MONOGRAM MATE REFERENCE)   */}
        {/* ============================================================= */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex flex-col items-center justify-center">
            {/* Title with elegant branding */}
            <div className="flex items-baseline justify-center gap-2 sm:gap-3">
              <span className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-[0.12em] uppercase font-heading text-stone-950">
                GỢI Ý
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-[0.12em] uppercase font-heading text-stone-800">
                PHONG CÁCH
              </span>
            </div>
            
            {/* Subtitle Ribbon */}
            <div className="mt-1.5 flex w-full items-center justify-between text-[10px] font-bold uppercase tracking-[0.35em] text-stone-600 sm:mt-2 sm:text-xs sm:tracking-[0.45em]">
              <span>LOOKBOOK TỪ MB VEST</span>
              <span className="text-stone-900 font-extrabold">2026</span>
            </div>
          </div>
        </div>

        {/* ============================================================= */}
        {/* 2. DESKTOP VIEW: 4 CARDS SIDE-BY-SIDE IN FULL GLORY            */}
        {/* ============================================================= */}
        <div className="hidden lg:grid grid-cols-4 gap-3 xl:gap-4">
          {LOOKBOOK_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="group relative block overflow-hidden bg-stone-100 aspect-[3/4] shadow-xs hover:shadow-xl transition-all duration-500"
            >
              {/* Suit Model Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 1024px) 70vw, 25vw"
                className={`object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out ${item.objectPosition || "object-center"}`}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Tag Pill */}
              <div className="absolute top-3.5 left-3.5 z-10">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-stone-950/90 backdrop-blur-xs text-white px-2.5 py-1 rounded-xs border border-white/20">
                  {item.tag}
                </span>
              </div>

              {/* Bottom Caption & Link */}
              <div className="absolute inset-x-0 bottom-0 p-5 text-white transform transition-transform duration-300">
                <span className="text-[11px] uppercase tracking-[0.2em] text-stone-300 font-medium block mb-1">
                  {item.subtitle}
                </span>
                <h4 className="text-base font-normal uppercase tracking-wider text-white font-heading leading-tight mb-2">
                  {item.title}
                </h4>
                <div className="inline-flex items-center gap-1 text-xs uppercase tracking-widest font-semibold text-white/90 group-hover:translate-x-1 transition-transform">
                  <span>Khám phá mẫu</span>
                  <IconChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ============================================================= */}
        {/* 3. MOBILE & TABLET VIEW: PEEK HORIZONTAL SCROLL (SHOWING 1/2 OF 2ND CARD) */}
        {/* ============================================================= */}
        <div className="lg:hidden">
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-3 px-1 -mx-1 scrollbar-none">
            {LOOKBOOK_ITEMS.map((item) => (
              <div
                key={item.id}
                className="w-[68vw] sm:w-[45vw] flex-shrink-0 snap-start"
              >
                <Link
                  href={item.link}
                  className="group relative block overflow-hidden bg-stone-100 aspect-[3/4] shadow-md rounded-xs"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 70vw, 45vw"
                    className={`object-cover ${item.objectPosition || "object-center"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute top-2 left-2 z-10">
                    <span className="text-[9px] font-bold uppercase tracking-wider bg-stone-950/90 text-white px-2 py-0.5 rounded-xs">
                      {item.tag}
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-3.5 text-white">
                    <span className="text-[9px] uppercase tracking-wider text-stone-300 block line-clamp-1">
                      {item.subtitle}
                    </span>
                    <h4 className="text-xs sm:text-sm font-normal uppercase tracking-wider text-white font-heading line-clamp-1 mt-0.5">
                      {item.title}
                    </h4>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
