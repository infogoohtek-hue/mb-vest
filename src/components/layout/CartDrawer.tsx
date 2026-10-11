"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../../context/CartContext";
import {
  IconClose,
  IconTrash,
  IconTruck,
  IconCheck,
} from "../icons/Icons";
import { Button, Input, QuantityStepper, Badge } from "../ui";

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    totalItems,
    subtotal,
    remainingForFreeShipping,
    freeShippingProgress,
  } = useCart();

  const [voucherCode, setVoucherCode] = useState("");
  const [voucherApplied, setVoucherApplied] = useState(false);

  if (!isCartOpen) return null;

  const handleApplyVoucher = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCode = voucherCode.trim().toLowerCase();
    if (cleanCode === "mbvest10" || cleanCode === "leo10") {
      setVoucherApplied(true);
    }
  };

  const discountAmount = voucherApplied ? subtotal * 0.1 : 0;
  const finalTotal = subtotal - discountAmount;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 animate-fade-in"
      />

      {/* Slide-out Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-[95vw] w-104 bg-white shadow-2xl flex flex-col z-10 animate-slide-left">
        {/* Drawer Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-stone-950">
              GIỎ HÀNG MAY ĐO
            </h3>
            <Badge variant="primary">{totalItems}</Badge>
          </div>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="p-1 text-stone-500 hover:text-black focus:outline-none transition-colors"
          >
            <IconClose className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-stone-900 text-white p-4 border-b border-stone-800">
          <div className="flex items-center gap-2 text-xs font-semibold mb-2">
            <IconTruck className="w-4 h-4 text-amber-400" />
            {remainingForFreeShipping > 0 ? (
              <span>
                Đặt thêm{" "}
                <strong className="text-amber-300">
                  {remainingForFreeShipping.toLocaleString("vi-VN")}₫
                </strong>{" "}
                để nhận <strong className="text-amber-300">MIỄN PHÍ VẬN CHUYỂN</strong>
              </span>
            ) : (
              <span className="text-emerald-300 flex items-center gap-1.5">
                <IconCheck className="w-4 h-4" />
                Chúc mừng! Bạn đã được MIỄN PHÍ GIAO HÀNG TOÀN QUỐC
              </span>
            )}
          </div>
          <div className="w-full bg-stone-800 rounded-full h-1.5 overflow-hidden">
            <div
              className={`h-full transition-all duration-500 rounded-full ${
                freeShippingProgress >= 100 ? "bg-emerald-400" : "bg-amber-400"
              }`}
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-5 divide-y divide-stone-100">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 mb-4">
                <IconTruck className="w-8 h-8" />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-stone-800 mb-2">
                Giỏ hàng của bạn đang trống
              </h4>
              <p className="text-xs text-stone-500 max-w-xs mb-6">
                Hãy khám phá các mẫu Suit, Vest cưới và Áo sơ mi may đo từ Nhà may MB VEST!
              </p>
              <Button onClick={closeCart} variant="primary" size="md">
                Khám phá sản phẩm
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.product.id} className="pt-4 first:pt-0 flex gap-4">
                  {/* Thumbnail */}
                  <div className="w-20 h-24 bg-stone-100 rounded overflow-hidden flex-shrink-0 relative border border-stone-200">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          href={`/products/${item.product.id}`}
                          onClick={closeCart}
                          className="text-xs font-semibold text-stone-900 hover:text-black line-clamp-2 leading-snug"
                        >
                          {item.product.name}
                        </Link>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          aria-label="Remove item"
                          className="text-stone-400 hover:text-red-600 transition-colors p-0.5"
                        >
                          <IconTrash className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {item.selectedColor && (
                        <div className="flex items-center gap-1.5 mt-1">
                          <span
                            className="w-3 h-3 rounded-full border border-stone-300"
                            style={{ backgroundColor: item.selectedColor }}
                          />
                          <span className="text-[10px] uppercase tracking-wider text-stone-500 font-medium">
                            Màu sắc đã chọn
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Pricing & Stepper using shared QuantityStepper */}
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-50">
                      <QuantityStepper
                        size="sm"
                        value={item.quantity}
                        onChange={(newQty) => updateQuantity(item.product.id, newQty)}
                      />

                      <div className="text-right">
                        <span className="text-xs font-bold text-stone-950">
                          {(item.product.price * item.quantity).toLocaleString("vi-VN")}₫
                        </span>
                        {item.product.originalPrice && (
                          <div className="text-[10px] text-stone-400 line-through">
                            {(item.product.originalPrice * item.quantity).toLocaleString("vi-VN")}₫
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer / Checkout Summary */}
        {cart.length > 0 && (
          <div className="p-5 bg-stone-50 border-t border-stone-200 space-y-4">
            {/* Voucher input using shared Input and Button */}
            <form onSubmit={handleApplyVoucher} className="flex gap-2 items-end">
              <div className="flex-1">
                <Input
                  placeholder="Mã ưu đãi (thử: MBVEST10)"
                  value={voucherCode}
                  onChange={(e) => setVoucherCode(e.target.value)}
                  className="py-2 text-xs uppercase tracking-wider"
                />
              </div>
              <Button type="submit" variant="primary" size="sm" className="h-[42px] px-4">
                Áp dụng
              </Button>
            </form>

            {voucherApplied && (
              <div className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 p-2 rounded flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <IconCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Đã áp dụng mã MBVEST10 giảm 10%</span>
                </div>
                <span className="font-bold">-{discountAmount.toLocaleString("vi-VN")}₫</span>
              </div>
            )}

            {/* Calculations */}
            <div className="space-y-1.5 text-xs text-stone-600">
              <div className="flex justify-between">
                <span>Tạm tính:</span>
                <span className="font-semibold text-stone-900">
                  {subtotal.toLocaleString("vi-VN")}₫
                </span>
              </div>
              <div className="flex justify-between">
                <span>Phí vận chuyển:</span>
                <span className="font-semibold text-stone-900">
                  {remainingForFreeShipping === 0 ? "Miễn phí (0₫)" : "30.000₫"}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-stone-200 text-sm font-bold text-stone-950">
                <span>TỔNG CỘNG:</span>
                <span className="text-base text-stone-950">
                  {(finalTotal + (remainingForFreeShipping === 0 ? 0 : 30000)).toLocaleString("vi-VN")}₫
                </span>
              </div>
            </div>

            {/* Checkout Button */}
            <Button
              variant="primary"
              size="lg"
              isFullWidth
              href="/checkout"
              onClick={closeCart}
            >
              Tiến hành thanh toán
            </Button>

            <p className="text-[10px] text-center text-stone-500 uppercase tracking-wider">
              Bảo hành phom dáng trọn đời • Tư vấn may đo Mr. Bình (0904 989 326)
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
