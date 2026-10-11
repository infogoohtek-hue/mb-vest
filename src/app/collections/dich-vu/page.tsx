"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IconChevronRight, IconCheck } from "@/components/icons/Icons";
import { Button } from "@/components/ui/Button";

const SERVICES = [
  {
    id: "ao-le",
    title: "DỊCH VỤ MAY ĐO ÁO LẺ (JACKET / BLAZER)",
    priceText: "Từ 1.800.000đ",
    structure: "Cấu tạo: Chỉ gồm 1 Áo Vest (Jacket), không có quần",
    description: "Giải pháp linh hoạt cho quý ông ưa thích sự trẻ trung, hiện đại. Dễ dàng kết hợp cùng quần jeans, chinos hoặc quần âu khác màu trong nhiều hoàn cảnh.",
    image: "/images/pruducts/ao_le.jpg",
    features: [
      "Bao gồm 1 Áo Vest (Jacket) cao cấp",
      "May đo chuẩn xác theo số đo vóc dáng cá nhân",
      "Chi phí khởi điểm từ 1.800.000đ",
      "Hỗ trợ tư vấn chất liệu vải & kiểu dáng phù hợp",
      "Chỉnh sửa phom dáng miễn phí trọn đời"
    ]
  },
  {
    id: "suit-2-manh",
    title: "DỊCH VỤ MAY ĐO BỘ SUIT 2 MẢNH",
    priceText: "Từ 2.500.000đ",
    structure: "Cấu tạo: Gồm 1 Áo Vest + 1 Quần âu đồng bộ",
    description: "Bộ trang phục chuẩn mực lịch lãm cho công sở, gặp gỡ đối tác và các sự kiện quan trọng. Sự kết hợp đồng bộ hoàn hảo giữa áo vest và quần âu cùng chất liệu.",
    image: "/images/pruducts/2_manh.png",
    features: [
      "Bao gồm 1 Áo Vest (Jacket) & 1 Quần âu đồng bộ",
      "Chi phí khởi điểm từ 2.500.000đ",
      "Đa dạng catalog chất liệu vải nhập khẩu cao cấp",
      "Cá nhân hóa từng chi tiết: Cổ áo, khuy, thêu tên",
      "Chỉnh sửa phom dáng miễn phí trọn đời"
    ]
  },
  {
    id: "suit-3-manh",
    title: "DỊCH VỤ MAY ĐO BỘ SUIT 3 MẢNH",
    priceText: "Từ 3.300.000đ",
    structure: "Cấu tạo: Gồm 1 Áo Vest + 1 Áo Gile (Waistcoat) + 1 Quần âu đồng bộ",
    description: "Đỉnh cao của sự sang trọng và đẳng cấp (Sartorial). Cấu trúc 3 mảnh tôn lên vóc dáng uy nghi, đặc biệt hoàn hảo cho chú rể trong ngày cưới hoặc các buổi tiệc VIP.",
    image: "/images/pruducts/xanh_navy.jpg",
    features: [
      "Bao gồm 1 Áo Vest + 1 Áo Gile (Waistcoat) + 1 Quần âu",
      "Chi phí khởi điểm từ 3.300.000đ",
      "Tôn vinh phom dáng quý ông tuyệt đối",
      "Dịch vụ may đo ưu tiên kỹ lưỡng từng đường kim mũi chỉ",
      "Chỉnh sửa phom dáng miễn phí trọn đời"
    ]
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Services List Section */}
      <section className="pb-16 md:pb-24 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-medium text-stone-500 mb-6">
            <Link href="/" className="hover:text-amber-700 transition-colors">TRANG CHỦ</Link>
            <IconChevronRight className="w-3 h-3" />
            <span className="uppercase text-stone-900">DỊCH VỤ MAY ĐO</span>
          </div>

          {/* Pricing Range Note Box */}
          <div className="mb-12 p-6 bg-stone-50 border border-stone-200 rounded-sm text-center max-w-3xl mx-auto">
            <h1 className="text-xl sm:text-2xl font-heading uppercase tracking-wider text-stone-900 mb-2">
              DỊCH VỤ MAY ĐO BESPOKE TẠI MB VEST
            </h1>
            <p className="text-stone-700 text-sm sm:text-base font-medium">
              May đo tại MB VEST có giá dao động từ <span className="font-bold text-amber-700">1.800.000đ</span> đến <span className="font-bold text-amber-700">45.000.000đ</span> tùy theo chất liệu vải và cấu tạo trang phục.
            </p>
          </div>

          <div className="space-y-20 md:space-y-28">
            {SERVICES.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={service.id} 
                  id={service.id}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center border-b border-stone-100 pb-16 last:border-b-0`}
                >
                  
                  {/* Image */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-stone-100 group rounded-xs border border-stone-200/60 shadow-xs">
                      <Image 
                        src={service.image} 
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-stone-950/90 backdrop-blur-xs text-amber-400 text-xs font-bold px-3 py-1.5 rounded-xs uppercase tracking-wider">
                        {service.priceText}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-3 mb-3">
                      <span className="h-px w-8 bg-amber-600" />
                      <span className="text-amber-700 text-xs font-bold uppercase tracking-widest">
                        Gói May Đo 0{index + 1}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl sm:text-3xl font-heading uppercase tracking-wider text-stone-900 mb-3 leading-tight">
                      {service.title}
                    </h2>

                    {/* Structure Badge */}
                    <div className="mb-4 inline-block bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-bold px-3.5 py-1.5 rounded-xs">
                      📌 {service.structure}
                    </div>
                    
                    <p className="text-stone-600 leading-relaxed mb-6 text-sm sm:text-base">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <IconCheck className="w-5 h-5 text-stone-900 shrink-0 mt-0.5" />
                          <span className="text-stone-700 text-sm sm:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div>
                      <Button
                        href="https://zalo.me/0904989326"
                        target="_blank"
                        rel="noreferrer"
                        variant="primary"
                        size="md"
                      >
                        LIÊN HỆ TƯ VẤN NGAY
                      </Button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>
    </main>
  );
}
