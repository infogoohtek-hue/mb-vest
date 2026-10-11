"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import { NAVIGATION_ITEMS, STORE_LOCATIONS } from "../../data/mockData";
import {
  IconClose,
  IconChevronDown,
  IconPhone,
  IconMapPin,
  IconHeart,
  IconChat,
} from "../icons/Icons";

export const MobileMenuDrawer: React.FC = () => {
  const { isMobileMenuOpen, closeMobileMenu, wishlist } = useCart();
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [showStores, setShowStores] = useState(false);

  if (!isMobileMenuOpen) return null;

  const toggleCategory = (title: string) => {
    setExpandedCategory((prev) => (prev === title ? null : title));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={closeMobileMenu}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 animate-fade-in"
      />

      {/* Slide-out Drawer */}
      <div className="absolute inset-y-0 left-0 max-w-[85vw] w-88 bg-white shadow-2xl flex flex-col z-10 animate-slide-right">
        {/* Drawer Header */}
        <div className="p-4 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <span className="text-base font-normal tracking-[0.25em] uppercase text-stone-900 font-heading">
            MB VEST
          </span>
          <button
            onClick={closeMobileMenu}
            aria-label="Close menu"
            className="p-2 text-stone-500 hover:text-black focus:outline-none transition-colors"
          >
            <IconClose className="w-6 h-6" />
          </button>
        </div>

        {/* Drawer Scrollable Navigation */}
        <div className="flex-1 overflow-y-auto px-5 py-4 divide-y divide-stone-100">
          {/* Main Links & Accordions */}
          <div className="space-y-1 pb-4">
            {NAVIGATION_ITEMS.map((item, idx) => {
              const hasChildren = Boolean(item.children && item.children.length > 0);
              const isExpanded = expandedCategory === item.title;

              return (
                <div key={idx} className="border-b border-stone-50 last:border-none">
                  <div className="flex items-center justify-between py-3">
                    <Link
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={`text-sm font-semibold tracking-wider uppercase transition-colors flex items-center gap-2 ${
                        item.isSale
                          ? "text-red-600 font-bold"
                          : "text-stone-800 hover:text-black"
                      }`}
                    >
                      <span>{item.title}</span>
                      {item.badge && (
                        <span
                          className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded tracking-normal ${
                            item.isSale
                              ? "bg-red-100 text-red-700"
                              : "bg-stone-900 text-white"
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </Link>

                    {hasChildren && (
                      <button
                        onClick={() => toggleCategory(item.title)}
                        aria-label="Toggle submenu"
                        className="p-1.5 text-stone-400 hover:text-black focus:outline-none"
                      >
                        <IconChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isExpanded ? "rotate-180 text-black" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Submenu Accordion */}
                  {hasChildren && isExpanded && (
                    <div className="pl-3 pb-3 space-y-4 animate-fade-in">
                      {item.children!.map((sec, sIdx) => (
                        <div key={sIdx} className="space-y-2">
                          <span className="text-[11px] uppercase tracking-[0.15em] font-bold text-stone-400 block pt-1">
                            {sec.categoryTitle}
                          </span>
                          <ul className="space-y-2 pl-2 border-l border-stone-200">
                            {sec.items.map((sub, subIdx) => {
                              const isExternal = sub.href.startsWith("http");
                              const Comp = isExternal ? "a" : Link;
                              const props = isExternal
                                ? { href: sub.href, target: "_blank", rel: "noreferrer", onClick: closeMobileMenu }
                                : { href: sub.href, onClick: closeMobileMenu };

                              return (
                                <li key={subIdx}>
                                  <Comp
                                    {...props}
                                    className="text-xs text-stone-600 hover:text-black font-medium flex items-center justify-between py-1"
                                  >
                                    <span>{sub.title}</span>
                                    {sub.badge && (
                                      <span className="text-[9px] font-semibold bg-stone-100 text-stone-700 px-1 rounded">
                                        {sub.badge}
                                      </span>
                                    )}
                                  </Comp>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Account / Wishlist Links */}
          <div className="py-4 space-y-3">

            <Link
              href="/wishlist"
              onClick={closeMobileMenu}
              className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-stone-700 hover:text-black"
            >
              <div className="flex items-center gap-3">
                <IconHeart className="w-4 h-4" />
                <span>Danh sách yêu thích</span>
              </div>
              {wishlist.length > 0 && (
                <span className="text-[10px] bg-stone-200 text-stone-800 font-bold px-1.5 py-0.5 rounded-full">
                  {wishlist.length}
                </span>
              )}
            </Link>
          </div>

          {/* Showrooms & Store Locator Accordion */}
          <div className="py-4">
            <button
              onClick={() => setShowStores(!showStores)}
              className="w-full flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-stone-800 py-1"
            >
              <div className="flex items-center gap-2">
                <IconMapPin className="w-4 h-4 text-stone-600" />
                <span>Địa chỉ Nhà may MB VEST</span>
              </div>
              <IconChevronDown
                className={`w-4 h-4 transition-transform ${showStores ? "rotate-180" : ""}`}
              />
            </button>

            {showStores && (
              <div className="mt-3 space-y-3 text-xs text-stone-600 animate-fade-in pl-6">
                {STORE_LOCATIONS.map((loc, lIdx) => (
                  <div key={lIdx} className="space-y-1">
                    <span className="font-bold text-stone-900">{loc.city}:</span>
                    {loc.stores.map((st, sIdx) => (
                      <div key={sIdx} className="space-y-1">
                        <p className="text-[11px] text-stone-600">
                          {st.address}
                        </p>
                        <a
                          href={st.mapUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[11px] text-amber-600 font-semibold underline block"
                        >
                          Mở Google Maps chỉ đường
                        </a>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Customer Support Hotlines */}
          <div className="py-4 space-y-2.5">
            <span className="text-[10px] uppercase tracking-widest font-bold text-stone-400">
              TƯ VẤN MAY ĐO & ĐẶT LỊCH HẸN
            </span>
            <a
              href="tel:0904989326"
              className="flex items-center gap-2 text-sm font-semibold text-stone-900 hover:text-stone-700"
            >
              <IconPhone className="w-4 h-4 text-stone-800" />
              <span>0904 989 326 (Mr. Bình)</span>
            </a>
            <a
              href="https://zalo.me/0904989326"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-stone-800 hover:text-black"
            >
              <IconChat className="w-4 h-4 text-stone-800" />
              <span>Nhắn tin Zalo với Mr. Bình</span>
            </a>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="p-4 bg-stone-100 border-t border-stone-200 text-center">
          <p className="text-[11px] text-stone-500 uppercase tracking-widest">
            Bảo hành & chỉnh sửa phom dáng trọn đời
          </p>
        </div>
      </div>
    </div>
  );
};
