"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const CATEGORIES = [
  {
    title: "ÁO LẺ (JACKET / BLAZER)",
    subtitle: "GIÁ TỪ 1.800.000 VNĐ",
    image: "/images/pruducts/ao_le.jpg",
    href: "/collections/ao-le",
    colSpan: "col-span-12 md:col-span-4",
    aspect: "aspect-[4/5]",
  },
  {
    title: "BỘ SUIT 2 MẢNH",
    subtitle: "GIÁ TỪ 2.500.000 VNĐ",
    image: "/images/pruducts/2_manh.png",
    href: "/collections/suit-2-manh",
    colSpan: "col-span-12 md:col-span-4",
    aspect: "aspect-[4/5]",
  },
  {
    title: "BỘ SUIT 3 MẢNH",
    subtitle: "GIÁ TỪ 3.300.000 VNĐ",
    image: "/images/pruducts/xanh_navy.jpg",
    href: "/collections/suit-3-manh",
    colSpan: "col-span-12 md:col-span-4",
    aspect: "aspect-[4/5]",
  },
];

export const CategoryGrid: React.FC = () => {
  return (
    <section 
      className="py-16 md:py-24 overflow-hidden relative bg-transparent"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal uppercase tracking-[0.12em] text-stone-900 font-heading">
            DANH MỤC MAY ĐO MB VEST
          </h2>
        </div>

        {/* Grid of Categories */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {CATEGORIES.map((cat, idx) => (
            <div key={idx} className={`${cat.colSpan} relative group overflow-hidden bg-stone-200`}>
              <Link href={cat.href} className="block w-full h-full relative overflow-hidden">
                <div className={`${cat.aspect} w-full relative overflow-hidden`}>
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-white">
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-amber-300 font-semibold mb-1">
                    {cat.subtitle}
                  </span>
                  <h3 className="text-lg md:text-xl font-normal uppercase tracking-wider text-white font-heading">
                    {cat.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-white/90 group-hover:text-amber-300 transition-colors">
                    <span>Xem dịch vụ</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
