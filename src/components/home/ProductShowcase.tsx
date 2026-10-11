"use client";

import React, { useState } from "react";
import { MOCK_PRODUCTS } from "../../data/mockData";
import { ProductCard, Button } from "../ui";

const TABS = ["TẤT CẢ", "VEST MAY ĐO", "SUIT CƯỚI"];

export const ProductShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState("TẤT CẢ");

  const filteredProducts =
    activeTab === "TẤT CẢ"
      ? MOCK_PRODUCTS
      : MOCK_PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <section 
      className="py-16 md:py-24 overflow-hidden relative bg-repeat"
      style={{ 
        backgroundImage: "url('/bacground_section/section_4.png')",
        backgroundSize: "700px"
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal uppercase tracking-[0.12em] text-white font-heading">
            SẢN PHẨM MAY ĐO NỔI BẬT
          </h2>
          <p className="text-xs sm:text-sm text-stone-300">
            Suit & vest từ Linen nguyên chất và Linen pha tuyển chọn, dựng phom thủ công theo số đo riêng.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 md:gap-3 mb-12">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xs uppercase tracking-[0.18em] font-medium px-4 py-2 transition-all border ${
                activeTab === tab
                  ? "bg-white text-stone-950 border-white shadow-xs"
                  : "bg-black/50 backdrop-blur-sm text-stone-100 border-white/20 hover:bg-black/70 hover:border-white/50 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product Grid using shared ProductCard */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              className="bg-white p-2.5 sm:p-4 shadow-xl border border-stone-100"
            />
          ))}
        </div>

        {/* View All CTA using shared Button */}
        <div className="text-center mt-14">
          <Button
            variant="outline"
            size="md"
            href="/collections/vest-may-do"
            className="border-white/40 hover:border-white text-white hover:bg-white hover:!text-stone-950"
          >
            XEM TẤT CẢ MẪU SUIT MAY ĐO
          </Button>
        </div>
      </div>
    </section>
  );
};
