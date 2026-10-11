"use client";

import React from "react";
import { CraftsmanshipVideo } from "./CraftsmanshipVideo";
import { Button } from "../ui";

export const EditorialSection: React.FC = () => {
  return (
    <section 
      className="py-20 bg-cover bg-center overflow-hidden relative text-stone-900"
      style={{ backgroundImage: "url('/bacground_section/section_1.png')" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <CraftsmanshipVideo />
          </div>

          {/* Right Text Story */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[13px] uppercase tracking-[0.25em] font-bold text-amber-600 block">
              TRIẾT LÝ MAY ĐO MB VEST
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal uppercase tracking-[0.08em] leading-snug font-heading text-stone-900">
              TỪNG ĐƯỜNG CẮT, TỪNG SỰ CHĂM CHÚT
            </h2>

            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              Ghé một góc xưởng <strong>MB VEST</strong>, theo dõi người thợ trực tiếp xử lý và cắt vải trước khi bước vào công đoạn may. Sự chỉn chu bắt đầu từ những thao tác nhỏ nhất.
            </p>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              MB VEST lựa chọn <strong className="text-stone-900">Linen và Linen pha cao cấp</strong> làm chất liệu chủ đạo. Mỗi tỷ lệ phối sợi mang lại độ thoáng, độ đứng phom và sắc thái bề mặt khác nhau, phù hợp từng nhu cầu sử dụng.
            </p>

            <div className="space-y-4 py-1">
              <h3 className="text-sm font-semibold text-stone-900">
                Linen nào phù hợp để may vest?
              </h3>
              <ul className="space-y-3.5 text-xs text-stone-700 sm:text-sm">
              {[
                {
                  name: "100% Linen",
                  detail: "mát, thoáng và nhẹ, lên dáng tự nhiên; nét đặc trưng là dễ tạo nếp nhăn khi mặc.",
                },
                {
                  name: "Linen + Wool",
                  detail: "đứng phom, sang hơn và ít nhăn hơn Linen thuần; phù hợp vest may đo lịch sự.",
                },
                {
                  name: "Linen + Silk",
                  detail: "bề mặt mềm, có độ bóng nhẹ và cảm giác cao cấp; cần kỹ thuật xử lý cẩn thận khi may.",
                },
                {
                  name: "Linen + Cotton",
                  detail: "mềm và thoải mái, phù hợp vest casual hoặc summer suit.",
                },
              ].map((fabric) => (
                <li key={fabric.name} className="flex items-start gap-2.5 leading-relaxed">
                  <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rotate-45 bg-amber-500" />
                  <span>
                    <strong className="font-semibold text-stone-900">{fabric.name}:</strong>{" "}
                    {fabric.detail}
                  </span>
                </li>
              ))}
              </ul>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              <strong>Mr. Bình</strong> và đội ngũ MB VEST tư vấn định lượng vải, màu sắc và kiểu dệt phù hợp với nhu cầu sử dụng trước khi dựng phom thủ công theo vóc dáng từng khách hàng.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="md"
                href="https://zalo.me/0904989326"
                className="shadow-lg"
              >
                ĐẶT HẸN VỚI MR. BÌNH
              </Button>
              <Button
                variant="outline"
                size="md"
                href="https://www.google.com/maps/place/Nhà+may+MB+VEST/@20.7240575,105.8827778,152m/data=!3m1!1e3!4m6!3m5!1s0x3135c91dd951f101:0x78221c9f5e6cb5be!8m2!3d20.7240734!4d105.8824261!16s%2Fg%2F11whfs0_cr"
                className="border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white"
              >
                XEM BẢN ĐỒ NHÀ MAY
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
