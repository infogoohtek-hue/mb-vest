import React from "react";
import Link from "next/link";
import { ProductCard } from "@/components/ui/ProductCard";
import { MOCK_PRODUCTS } from "@/data/mockData";
import { IconChevronRight } from "@/components/icons/Icons";

export default function CollectionPage() {
  // Hiển thị tất cả sản phẩm
  const products = MOCK_PRODUCTS;

  return (
    <main className="min-h-screen bg-stone-50 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-medium text-stone-500 mb-8 pt-4">
          <Link href="/" className="hover:text-amber-700 transition-colors">TRANG CHỦ</Link>
          <IconChevronRight className="w-3 h-3" />
          <span className="uppercase text-stone-900">DANH MỤC SẢN PHẨM</span>
        </div>

        <div className="flex flex-col md:flex-row items-baseline justify-between mb-8 pb-4 border-b border-stone-200">
          <h1 className="text-3xl font-heading uppercase tracking-widest text-stone-900">
            TẤT CẢ SẢN PHẨM
          </h1>
          <span className="text-sm text-stone-500 mt-2 md:mt-0 font-medium">
            Hiển thị {products.length} sản phẩm
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
