"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAVIGATION_ITEMS } from "../../data/mockData";
import { useCart } from "../../context/CartContext";
import {
  IconSearch,
  IconCart,
  IconHeart,
  IconMenu,
  IconChevronDown,
} from "../icons/Icons";
import { MegaMenu } from "./MegaMenu";
import { NavItem } from "../../types";

export const Header: React.FC = () => {
  const { openCart, openMobileMenu, openSearch, totalItems, wishlist } = useCart();
  const [activeMegaMenu, setActiveMegaMenu] = useState<NavItem | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrolled = false;
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      if (scrolled !== lastScrolled) {
        lastScrolled = scrolled;
        setIsScrolled(scrolled);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`site-header sticky top-0 z-30 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-md shadow-sm"
          : "bg-white"
      }`}
      onMouseLeave={() => setActiveMegaMenu(null)}
    >
      {/* ================================================================= */}
      {/* 1. TOP MAIN BAR: BRAND LOGO & ACTION ICONS                        */}
      {/* ================================================================= */}
      <div className="border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            
            {/* --- Left Column: Mobile Hamburger or Desktop Quick Search --- */}
            <div className="flex items-center space-x-1 sm:space-x-3 w-1/4 lg:w-1/3">
              {/* Mobile / Tablet: Hamburger + Search */}
              <div className="flex items-center lg:hidden space-x-1">
                <button
                  onClick={openMobileMenu}
                  aria-label="Open mobile menu"
                  className="p-2 -ml-2 text-stone-900 hover:text-black focus:outline-none transition-colors"
                >
                  <IconMenu className="w-6 h-6" />
                </button>
                <button
                  onClick={openSearch}
                  aria-label="Open search"
                  className="p-2 text-stone-900 hover:text-black focus:outline-none transition-colors"
                >
                  <IconSearch className="w-5 h-5" />
                </button>
              </div>

              {/* Desktop: Sleek Search Bar */}
              <button
                onClick={openSearch}
                aria-label="Search"
                className="hidden lg:flex items-center gap-2.5 text-xs text-stone-500 hover:text-black transition-colors px-3 py-1.5 rounded-full border border-stone-200 hover:border-stone-400 bg-stone-50/60"
              >
                <IconSearch className="w-4 h-4 text-stone-500" />
                <span className="tracking-wider uppercase text-[11px] font-medium pr-2">
                  Tìm kiếm mẫu vest, sơ mi...
                </span>
              </button>
            </div>

            {/* --- Center Column: MB VEST Logo (Prominent, unblocked) --- */}
            <div className="flex items-center justify-center flex-1 text-center">
              <Link
                href="/"
                aria-label="MB VEST - Trang chủ"
                className="inline-flex items-center justify-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b08d57]/60 focus-visible:ring-offset-2"
              >
                <Image
                  src="/logo.png"
                  alt="Logo MB VEST"
                  width={160}
                  height={160}
                  priority
                  className="h-12 w-12 object-contain transition-transform duration-300 hover:scale-105 sm:h-14 sm:w-14 lg:h-[4.5rem] lg:w-[4.5rem]"
                />
              </Link>
            </div>

            {/* --- Right Column: Action Icons (Account, Wishlist, Cart) --- */}
            <div className="flex items-center justify-end space-x-1 sm:space-x-3 lg:space-x-4 w-1/4 lg:w-1/3">
              {/* Zalo / Hotline link */}
              <a
                href="https://zalo.me/0904989326"
                target="_blank"
                rel="noreferrer"
                className="group hidden items-center gap-2 border-b border-stone-300 pb-1 text-stone-800 transition-colors hover:border-stone-900 hover:text-stone-950 xl:inline-flex whitespace-nowrap"
              >
                <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-stone-500 transition-colors group-hover:text-stone-700">
                  SĐT / ZALO
                </span>
                <span aria-hidden="true" className="h-3 w-px bg-stone-300 shrink-0" />
                <span className="text-xs font-semibold tracking-[0.04em]">
                  0904 989 326
                </span>
              </a>



              {/* Wishlist */}
              <Link
                href="/wishlist"
                aria-label="Wishlist"
                className="flex items-center justify-center text-stone-800 hover:text-black transition-colors p-2 rounded-full hover:bg-stone-100 relative"
              >
                <IconHeart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute top-1 right-1 bg-stone-950 text-white text-[9px] min-w-[15px] h-[15px] px-1 rounded-full flex items-center justify-center font-bold">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              {/* Cart Drawer Trigger */}
              <button
                onClick={openCart}
                aria-label="Shopping Cart"
                className="flex items-center gap-2 text-stone-950 hover:text-black transition-all p-2 rounded-full hover:bg-stone-100 relative group focus:outline-none"
              >
                <div className="relative">
                  <IconCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1.5 -right-2 bg-stone-950 text-white text-[10px] min-w-[17px] h-[17px] px-1 rounded-full flex items-center justify-center font-bold animate-scale-up">
                      {totalItems}
                    </span>
                  )}
                </div>
                <span className="text-[11px] uppercase tracking-[0.15em] font-bold text-stone-900 hidden 2xl:inline">
                  Giỏ hàng
                </span>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ================================================================= */}
      {/* 2. DEDICATED DESKTOP NAVIGATION ROW                              */}
      {/* ================================================================= */}
      <nav className="hidden lg:block border-b border-stone-200/70 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-7 xl:space-x-9 py-2.5">
            {NAVIGATION_ITEMS.map((item, idx) => {
              const hasChildren = Boolean(item.children && item.children.length > 0);
              const isHovered = activeMegaMenu?.title === item.title;

              return (
                <div
                  key={idx}
                  className="relative py-1"
                  onMouseEnter={() => hasChildren && setActiveMegaMenu(item)}
                >
                  <Link
                    href={item.href}
                    className={`whitespace-nowrap text-xs uppercase tracking-[0.16em] font-semibold transition-all inline-flex items-center gap-1.5 py-1 group ${
                      item.isSale
                        ? "text-red-600 hover:text-red-700 font-bold"
                        : isHovered
                        ? "text-stone-950 font-bold"
                        : "text-stone-800 hover:text-black"
                    }`}
                  >
                    <span className="relative">
                      {item.title}
                      <span
                        className={`absolute left-0 -bottom-1 w-full h-0.5 bg-stone-900 transition-transform duration-200 origin-left ${
                          isHovered ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </span>

                    {hasChildren && (
                      <IconChevronDown
                        className={`w-3 h-3 text-stone-400 transition-transform duration-200 ${
                          isHovered ? "rotate-180 text-black" : "group-hover:text-black"
                        }`}
                      />
                    )}

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
                </div>
              );
            })}
          </div>
        </div>
      </nav>

      {/* ================================================================= */}
      {/* 3. MEGA MENU DROPDOWN                                             */}
      {/* ================================================================= */}
      {activeMegaMenu && (
        <MegaMenu
          item={activeMegaMenu}
          isOpen={Boolean(activeMegaMenu)}
          onClose={() => setActiveMegaMenu(null)}
        />
      )}
    </header>
  );
};
