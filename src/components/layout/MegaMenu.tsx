"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NavItem } from "../../types";
import {
  IconScissors,
  IconChevronRight,
  IconMapPin,
  IconPhone,
  IconChat,
  IconSparkles,
} from "../icons/Icons";

interface MegaMenuProps {
  item: NavItem;
  isOpen: boolean;
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ item, isOpen, onClose }) => {
  if (!isOpen || !item.children || item.children.length === 0) return null;

  const renderIcon = (iconName?: string) => {
    switch (iconName) {
      case "pin":
        return <IconMapPin className="w-4 h-4" />;
      case "scissors":
        return <IconScissors className="w-4 h-4" />;
      case "chat":
        return <IconChat className="w-4 h-4" />;
      default:
        return <IconSparkles className="w-4 h-4" />;
    }
  };

  const firstSection = item.children[0];
  const secondSection = item.children.length > 1 ? item.children[1] : null;

  return (
    <div
      className="mega-menu-dropdown absolute top-full left-0 w-full bg-white text-stone-900 border-b border-stone-200 shadow-2xl transition-all duration-300 z-40 animate-slide-down"
      onMouseLeave={onClose}
    >
      {/* Subtle Sartorial gold accent line at the top */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#c5a880]/70 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8 lg:py-9">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Primary Tailoring Packages (col-span-4) */}
          {firstSection && (
            <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
              <div>
                <div className="border-b border-stone-100 pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-0.5 bg-amber-700 rounded-full" />
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-900 font-heading">
                      {firstSection.categoryTitle}
                    </h4>
                  </div>
                  {firstSection.categorySubtitle && (
                    <p className="text-[11px] text-stone-500 mt-1 pl-2.5">
                      {firstSection.categorySubtitle}
                    </p>
                  )}
                </div>

                <ul className="space-y-2">
                  {firstSection.items.map((subItem, sIdx) => (
                    <li key={sIdx}>
                      <Link
                        href={subItem.href}
                        onClick={onClose}
                        className="group block p-3 rounded-lg border border-transparent hover:border-stone-200/80 hover:bg-stone-50/90 transition-all duration-200"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm font-semibold text-stone-900 group-hover:text-amber-900 transition-colors">
                            {subItem.title}
                          </span>
                          {subItem.badge && (
                            <span
                              className={`text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full shrink-0 ${
                                subItem.badge === "Hot"
                                  ? "bg-amber-100 text-amber-900 border border-amber-300/60"
                                  : subItem.badge === "Bán chạy"
                                  ? "bg-stone-900 text-white"
                                  : "bg-stone-100 text-stone-800 border border-stone-200"
                              }`}
                            >
                              {subItem.badge}
                            </span>
                          )}
                        </div>

                        {subItem.description && (
                          <p className="text-xs text-stone-500 mt-1 leading-relaxed line-clamp-1 group-hover:text-stone-700">
                            {subItem.description}
                          </p>
                        )}

                        {subItem.price && (
                          <div className="mt-1.5 flex items-center justify-between text-xs">
                            <span className="font-semibold text-amber-800">
                              {subItem.price}
                            </span>
                            <span className="text-[11px] text-stone-400 group-hover:text-stone-900 group-hover:translate-x-0.5 transition-all flex items-center gap-0.5 font-medium">
                              Chi tiết <IconChevronRight className="w-3 h-3 inline" />
                            </span>
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Quick Link */}
              <Link
                href="/collections/dich-vu"
                onClick={onClose}
                className="text-xs font-semibold text-stone-800 hover:text-amber-900 flex items-center justify-between p-2.5 rounded border border-stone-200/70 hover:border-stone-300 bg-stone-50/60 transition-colors"
              >
                <span>Xem tất cả gói may đo & bảng giá</span>
                <IconChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}

          {/* Column 2: Exclusive Atelier Services & Quick Hotline (col-span-4) */}
          {secondSection && (
            <div className="lg:col-span-4 lg:border-l lg:border-stone-100 lg:pl-8 flex flex-col justify-between space-y-4">
              <div>
                <div className="border-b border-stone-100 pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-0.5 bg-[#c5a880] rounded-full" />
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-900 font-heading">
                      {secondSection.categoryTitle}
                    </h4>
                  </div>
                  {secondSection.categorySubtitle && (
                    <p className="text-[11px] text-stone-500 mt-1 pl-2.5">
                      {secondSection.categorySubtitle}
                    </p>
                  )}
                </div>

                <ul className="space-y-2">
                  {secondSection.items.map((subItem, sIdx) => {
                    const isExternal = subItem.href.startsWith("http");
                    const LinkComponent = isExternal ? "a" : Link;
                    const linkProps = isExternal
                      ? { href: subItem.href, target: "_blank", rel: "noreferrer", onClick: onClose }
                      : { href: subItem.href, onClick: onClose };

                    return (
                      <li key={sIdx}>
                        <LinkComponent
                          {...linkProps}
                          className="group flex items-start gap-3 p-3 rounded-lg border border-transparent hover:border-stone-200/80 hover:bg-stone-50/90 transition-all duration-200"
                        >
                          <div className="w-8 h-8 rounded-full bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-800 shrink-0 mt-0.5 group-hover:bg-stone-900 group-hover:text-amber-300 group-hover:border-stone-900 transition-colors">
                            {renderIcon(subItem.icon)}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1">
                              <span className="text-sm font-semibold text-stone-900 group-hover:text-amber-900 transition-colors">
                                {subItem.title}
                              </span>
                            </div>
                            {subItem.description && (
                              <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                                {subItem.description}
                              </p>
                            )}
                            {subItem.price && (
                              <span className="inline-block mt-1 text-[11px] font-medium text-amber-800">
                                {subItem.price}
                              </span>
                            )}
                          </div>
                        </LinkComponent>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Quick Hotline & Zalo Contact Strip */}
              <div className="p-3 bg-[#f7f5f0] border border-amber-900/10 rounded-lg flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-7 h-7 rounded-full bg-stone-900 text-amber-300 flex items-center justify-center shrink-0">
                    <IconPhone className="w-3.5 h-3.5" />
                  </div>
                  <div className="truncate">
                    <p className="text-[10px] uppercase tracking-wider font-semibold text-stone-500">
                      Tư vấn trực tiếp
                    </p>
                    <a
                      href="tel:0904989326"
                      className="text-xs font-bold text-stone-900 hover:text-amber-800 transition-colors block"
                    >
                      0904 989 326 (Mr. Bình)
                    </a>
                  </div>
                </div>

                <a
                  href="https://zalo.me/0904989326"
                  target="_blank"
                  rel="noreferrer"
                  onClick={onClose}
                  className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1.5 rounded bg-stone-900 text-white hover:bg-amber-800 transition-colors shrink-0"
                >
                  <span>Chat Zalo</span>
                </a>
              </div>
            </div>
          )}

          {/* Column 3: Visual Spotlight Card with Exact 3:4 Aspect Ratio (col-span-4) */}
          <div className="lg:col-span-4 lg:border-l lg:border-stone-100 lg:pl-8 flex flex-col justify-between">
            <div>
              <div className="border-b border-stone-100 pb-3 mb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-0.5 bg-stone-900 rounded-full" />
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-900 font-heading">
                      BỘ SƯU TẬP NỔI BẬT
                    </h4>
                  </div>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="text-[11px] font-semibold text-amber-800 hover:text-stone-950 flex items-center gap-0.5"
                  >
                    <span>Xem tất cả</span>
                    <IconChevronRight className="w-3 h-3" />
                  </Link>
                </div>
                <p className="text-[11px] text-stone-500 mt-1 pl-2.5">
                  Bộ Suit 3 Mảnh Xanh Navy Sartorial
                </p>
              </div>

              {/* Exact 3:4 aspect ratio matching the 768x1024 photo resolution */}
              <Link
                href={item.href}
                onClick={onClose}
                className="group relative overflow-hidden rounded-lg bg-stone-100 aspect-[3/4] w-full cursor-pointer block border border-stone-200/80 shadow-sm"
              >
                <Image
                  src="/images/pruducts/xanh_navy.jpg"
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 320px"
                  className="object-cover object-top group-hover:scale-103 transition-transform duration-700"
                />
                
                {/* Subtle bottom gradient overlay only at the base, never covering the suit torso */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pt-12 pb-3.5 px-4 text-white">
                  <span className="text-[9px] tracking-[0.22em] uppercase text-amber-300 font-semibold block mb-0.5">
                    NHÀ MAY MB VEST · HÀ NỘI
                  </span>
                  <div className="flex items-center justify-between">
                    <h5 className="font-heading text-sm font-normal uppercase tracking-wider text-white">
                      Suit 3 Mảnh Cao Cấp
                    </h5>
                    <span className="text-[11px] uppercase tracking-wider text-stone-200 underline underline-offset-4 font-medium group-hover:text-amber-300 transition-colors flex items-center gap-1">
                      <span>Chi tiết</span>
                      <IconChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
