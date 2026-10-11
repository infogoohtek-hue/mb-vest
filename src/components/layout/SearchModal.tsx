"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../../context/CartContext";
import { MOCK_PRODUCTS } from "../../data/mockData";
import { IconClose, IconSearch } from "../icons/Icons";
import { Input, Button } from "../ui";

const POPULAR_SEARCHES = [
  "Ví Da Nam",
  "Túi Đeo Chéo",
  "Thắt Lưng Khóa Tự Động",
  "Balo Da Laptop",
  "Dép Da Quai Ngang",
  "Clutch Nam Dự Tiệc",
  "Outlet Sale -50%",
];

export const SearchModal: React.FC = () => {
  const { isSearchOpen, closeSearch, addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState("");

  if (!isSearchOpen) return null;

  const filteredProducts = searchTerm.trim()
    ? MOCK_PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={closeSearch}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-fade-in"
      />

      {/* Modal Container */}
      <div className="relative min-h-screen flex items-start justify-center p-4 sm:p-6 lg:p-12 z-10">
        <div className="bg-white w-full max-w-3xl rounded-none shadow-2xl overflow-hidden border border-stone-200 animate-slide-down">
          {/* Search Header */}
          <div className="p-6 border-b border-stone-200">
            <div className="flex items-center justify-between pb-4">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-stone-400">
                TÌM KIẾM SẢN PHẨM LEONARDO
              </span>
              <button
                onClick={closeSearch}
                aria-label="Close search"
                className="p-1 text-stone-400 hover:text-black transition-colors"
              >
                <IconClose className="w-5 h-5" />
              </button>
            </div>

            {/* Search Input using shared Input component */}
            <div className="w-full">
              <Input
                autoFocus
                placeholder="Nhập tên sản phẩm, danh mục (ví da, balo, thắt lưng)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                iconLeft={<IconSearch className="w-5 h-5 text-stone-400" />}
                onClear={searchTerm ? () => setSearchTerm("") : undefined}
                className="text-base py-3"
              />
            </div>

            {/* Popular Searches */}
            <div className="mt-4 flex items-center flex-wrap gap-2">
              <span className="text-xs font-semibold text-stone-500 mr-1">Tìm kiếm phổ biến:</span>
              {POPULAR_SEARCHES.map((tag, idx) => (
                <button
                  key={idx}
                  onClick={() => setSearchTerm(tag)}
                  className="text-xs bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium px-2.5 py-1 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Results Area */}
          <div className="p-6 max-h-[60vh] overflow-y-auto">
            {searchTerm.trim() === "" ? (
              <div className="text-center py-8 text-stone-400 text-sm">
                Nhập từ khóa để bắt đầu tìm kiếm sản phẩm...
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-10 text-stone-500">
                <p className="text-sm font-semibold">Không tìm thấy sản phẩm phù hợp với &quot;{searchTerm}&quot;</p>
                <p className="text-xs text-stone-400 mt-1">Vui lòng thử lại với từ khóa khác như ví da, balo, thắt lưng...</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs text-stone-500 uppercase tracking-wider font-semibold border-b border-stone-100 pb-2">
                  <span>Tìm thấy {filteredProducts.length} sản phẩm</span>
                  <Link
                    href={`/search?q=${encodeURIComponent(searchTerm)}`}
                    onClick={closeSearch}
                    className="hover:text-black underline"
                  >
                    Xem tất cả kết quả
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="flex gap-3 p-2 hover:bg-stone-50 transition-colors border border-stone-100 rounded"
                    >
                      <div className="w-16 h-20 bg-stone-100 flex-shrink-0 overflow-hidden relative">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] uppercase tracking-wider font-semibold text-stone-400">
                            {product.category}
                          </span>
                          <Link
                            href={`/products/${product.id}`}
                            onClick={closeSearch}
                            className="text-xs font-bold text-stone-900 hover:text-black line-clamp-2 block mt-0.5"
                          >
                            {product.name}
                          </Link>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs font-extrabold text-stone-950">
                            {product.price.toLocaleString("vi-VN")}₫
                          </span>
                          <Button
                            variant="primary"
                            size="xs"
                            onClick={() => addToCart(product)}
                          >
                            + Thêm
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
