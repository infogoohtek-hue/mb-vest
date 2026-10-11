"use client";

import React from "react";
import Image from "next/image";
import { IconCheck, IconStar } from "../icons/Icons";

const REVIEWS = [
  {
    name: "Nguyễn Hoàng Nam",
    location: "Hà Nội",
    product: "Bộ Suit Cưới Tuxedo Ve Lụa",
    comment: "Mr. Bình lấy số đo rất kỹ và tư vấn kiểu ve áo cực kỳ hợp dáng người mình. Ngày cưới mặc bộ vest ai cũng khen sang trọng và đứng phom.",
    rating: 5,
    verified: true,
    avatar: "/avatar/avatar_1.png",
  },
  {
    name: "Trần Minh Đức",
    location: "Cầu Giấy, Hà Nội",
    product: "Vest Linen–Wool Doanh Nhân",
    comment: "Đã may 2 bộ Linen pha Wool tại MB VEST cho công việc tiếp khách. Vải vẫn thoáng nhẹ nhưng đứng phom và ít nhăn hơn Linen thuần; đường may rất sắc sảo.",
    rating: 5,
    verified: true,
    avatar: "/avatar/avatar_3.png",
  },
  {
    name: "Phạm Phương Anh",
    location: "Tây Hồ, Hà Nội",
    product: "Bộ Suit Cưới 3 Mảnh Premium",
    comment: "Đặt may suit cưới tặng chú rể ở MB VEST. Anh Bình hỗ trợ lấy số đo và tư vấn phom dáng rất tỉ mỉ. Ngày cưới ai cũng khen bộ vest đẹp và cực kỳ vừa vặn.",
    rating: 5,
    verified: true,
    avatar: "/avatar/avatar_2.png",
  },
];

export const CustomerReviews: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-stone-500">
            TRẢI NGHIỆM KHÁCH HÀNG
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal uppercase tracking-[0.1em] text-stone-900 font-heading whitespace-nowrap">
            ĐÁNH GIÁ TỪ QUÝ KHÁCH HÀNG
          </h2>
          <div className="flex items-center justify-center gap-1 text-amber-500 pt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <IconStar key={i} className="w-4 h-4 text-amber-400" />
            ))}
            <span className="text-xs text-stone-700 font-bold ml-2">4.9/5 hài lòng tuyệt đối</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 border border-stone-200/80 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <IconStar key={i} className="w-3.5 h-3.5" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-stone-200 bg-stone-100 relative">
                    <Image
                      src={rev.avatar}
                      alt={rev.name}
                      fill
                      sizes="40px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-stone-900">{rev.name}</span>
                      {rev.verified && (
                        <span className="text-emerald-600 flex items-center" title="Khách hàng đã may đo">
                          <IconCheck className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-stone-400">{rev.location}</span>
                  </div>
                </div>
                <span className="text-[10px] bg-stone-100 text-stone-700 font-semibold px-2 py-0.5 rounded max-w-[120px] truncate hidden sm:inline-block">
                  {rev.product}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
