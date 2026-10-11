"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "../../types";
import { useCart } from "../../context/CartContext";
import { IconHeart, IconCart, IconCheck } from "../icons/Icons";
import { Badge } from "./Badge";

export interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className = "" }) => {
  const { addToCart, toggleWishlist, wishlist } = useCart();
  const [selectedColor, setSelectedColor] = useState<string | null>(
    product.colors && product.colors.length > 0 ? product.colors[0] : null
  );
  const [isAdded, setIsAdded] = useState(false);

  const isWishlisted = wishlist.includes(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, selectedColor || undefined);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  const handleColorClick = (color: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedColor(color);
  };

  return (
    <div className={`product-card group flex flex-col justify-between ${className}`}>
      <div>
        {/* Product Image */}
        <div className="relative aspect-[3/4] bg-stone-100 overflow-hidden mb-3.5 border border-stone-100">
          <Link href={`/products/${product.id}`} className="block w-full h-full relative">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </Link>

          {/* Badge */}
          {product.tag && (
            <div className="absolute top-2.5 left-2.5 z-10">
              <Badge
                variant={
                  product.isSale ? "sale" : product.isNew ? "new" : "primary"
                }
              >
                {product.tag}
              </Badge>
            </div>
          )}

          {/* Wishlist Button */}
          <button
            type="button"
            onClick={handleToggleWishlist}
            aria-label="Wishlist"
            className={`absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-colors shadow-xs ${
              isWishlisted
                ? "bg-red-600 text-white"
                : "bg-white/90 text-stone-700 hover:bg-white hover:text-black"
            }`}
          >
            <IconHeart className="w-4 h-4" />
          </button>

          {/* Desktop Slide-up Add to Cart Button */}
          <div className="absolute bottom-0 inset-x-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10 hidden sm:block">
            <button
              type="button"
              onClick={handleAddToCart}
              className="w-full bg-stone-950/95 hover:bg-black text-white text-xs uppercase tracking-[0.18em] font-bold py-2.5 px-4 shadow-lg backdrop-blur-xs flex items-center justify-center gap-2 transition-colors"
            >
              {isAdded ? (
                <>
                  <IconCheck className="w-4 h-4 text-emerald-400" />
                  <span>Đã thêm!</span>
                </>
              ) : (
                <>
                  <IconCart className="w-4 h-4" />
                  <span>Thêm vào giỏ</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Color Swatches */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex items-center gap-1.5 mb-2">
            {product.colors.map((color, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => handleColorClick(color, e)}
                aria-label={`Select color ${color}`}
                className={`w-3.5 h-3.5 rounded-full border transition-all ${
                  selectedColor === color
                    ? "ring-1 ring-stone-900 ring-offset-1 scale-110"
                    : "border-stone-300 opacity-70 hover:opacity-100"
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}

        {/* Category & Title */}
        <span className="text-[10px] uppercase tracking-[0.16em] font-semibold text-stone-400 block mb-1">
          {product.category}
        </span>
        <h3 className="text-xs sm:text-sm font-semibold text-stone-900 hover:text-black transition-colors line-clamp-2 leading-snug">
          <Link href={`/products/${product.id}`}>{product.name}</Link>
        </h3>
      </div>

      {/* Pricing & Mobile Quick Add Button */}
      <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between">
        <div className="space-x-2">
          <span className="text-xs sm:text-sm font-bold text-stone-950 tracking-wider">
            LIÊN HỆ TƯ VẤN
          </span>
        </div>

        {/* Mobile Quick Add */}
        <button
          type="button"
          onClick={handleAddToCart}
          aria-label="Add to cart"
          className="sm:hidden p-1.5 bg-stone-100 hover:bg-stone-900 hover:text-white text-stone-900 rounded transition-colors"
        >
          <IconCart className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
