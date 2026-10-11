"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconShieldCheck,
  IconTruck,
  IconRefreshCw,
  IconArrowUp,
  IconCheck,
  IconChat,
} from "../icons/Icons";
import { Button, Input } from "../ui";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer 
      className="site-footer border-t border-white/10 bg-[#0d0c0b] pb-24 text-white lg:pb-8 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/bacground_section/backgrounde_footer.png')" }}
    >
      <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>
      <div className="relative z-10">
        {/* Brand Value Propositions Ribbon */}
      <div className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-6 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div className="flex items-center gap-3.5 text-left">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center border border-stone-700 text-[#c5a880]">
              <IconShieldCheck className="h-[18px] w-[18px]" />
            </div>
            <div className="text-left">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                MAY ĐO CHUẨN PHOM
              </h4>
              <p className="mt-1 text-[11px] leading-snug text-stone-500">Dựng phom theo số đo riêng</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 text-left lg:border-l lg:border-white/10 lg:pl-8">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center border border-stone-700 text-[#c5a880]">
              <IconRefreshCw className="h-[18px] w-[18px]" />
            </div>
            <div className="text-left">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                BẢO HÀNH TRỌN ĐỜI
              </h4>
              <p className="mt-1 text-[11px] leading-snug text-stone-500">Chỉnh sửa phom dáng miễn phí</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 text-left lg:border-l lg:border-white/10 lg:pl-8">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center border border-stone-700 text-[#c5a880]">
              <IconTruck className="h-[18px] w-[18px]" />
            </div>
            <div className="text-left">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                GIAO HÀNG TẬN NƠI
              </h4>
              <p className="mt-1 text-[11px] leading-snug text-stone-500">Miễn phí giao hàng toàn quốc</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 text-left lg:border-l lg:border-white/10 lg:pl-8">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center border border-stone-700 text-[#c5a880]">
              <IconPhone className="h-[18px] w-[18px]" />
            </div>
            <div className="text-left">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                TƯ VẤN TRỰC TIẾP
              </h4>
              <p className="mt-1 text-[11px] leading-snug text-stone-500">Mr. Bình · 0904 989 326</p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter / Booking Consultation */}
      <div className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div className="space-y-3 text-center lg:text-left">
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#c5a880]">
              ĐẶT LỊCH HẸN MAY ĐO
            </span>
            <h3 className="font-heading text-xl font-normal uppercase tracking-[0.1em] text-white md:text-2xl">
              TƯ VẤN MAY ĐO CÙNG MB VEST
            </h3>
            <p className="max-w-xl text-xs leading-relaxed text-stone-400 md:text-sm">
              Để lại email hoặc số điện thoại để được tư vấn chất liệu Linen và phom dáng phù hợp.
            </p>
          </div>

          {isSubscribed ? (
            <div className="flex min-h-[48px] items-center justify-center gap-2 border border-emerald-500/40 bg-emerald-950/60 p-3 text-xs font-semibold text-emerald-300">
              <IconCheck className="w-4 h-4 text-emerald-400" />
              <span>Cảm ơn bạn! Mr. Bình (MB VEST) sẽ liên hệ tư vấn trong thời gian sớm nhất.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex w-full max-w-xl items-center gap-2 lg:ml-auto">
              <div className="flex-1">
                <Input
                  type="text"
                  required
                  placeholder="Nhập email hoặc SĐT của bạn..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-stone-900 border-stone-700 text-white placeholder-stone-500 focus:border-white"
                />
              </div>
              <Button
                type="submit"
                variant="secondary"
                size="md"
                className="h-[46px] bg-white hover:bg-stone-200 text-black flex-shrink-0"
              >
                GỬI YÊU CẦU
              </Button>
            </form>
          )}
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-12">
          
          {/* Col 1: About MB VEST */}
          <div className="space-y-4 lg:col-span-3">
            <div className="flex flex-col">
              <span className="font-heading text-lg font-normal uppercase tracking-[0.2em] text-white">
                NHÀ MAY MB VEST
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-stone-400 font-medium">
                BESPOKE TAILORING • HÀ NỘI
              </span>
            </div>
            <p className="max-w-sm text-xs leading-6 text-stone-400">
              Nhà may MB VEST chuyên Suit Linen, Vest cưới, Áo sơ mi và Quần âu may đo. Mỗi thiết kế được dựng phom thủ công theo vóc dáng và nhu cầu sử dụng riêng.
            </p>
            <div className="pt-2 text-xs text-stone-400 space-y-1">
              <p>Phụ trách may đo: <strong>Mr. Bình</strong></p>
              <p>Dịch vụ may đo tận nơi theo yêu cầu của quý khách</p>
            </div>
          </div>

          {/* Col 2: Customer Support & Tailoring Services */}
          <div className="space-y-5 lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              DỊCH VỤ MAY ĐO
            </h4>
            <ul className="space-y-3 text-xs leading-relaxed text-stone-400">
              <li>
                <Link href="/collections/vest-may-do" className="hover:text-white transition-colors">
                  May đo Suit & Vest Linen cao cấp
                </Link>
              </li>
              <li>
                <Link href="/collections/suit-cuoi" className="hover:text-white transition-colors">
                  May đo Vest cưới chú rể Tuxedo
                </Link>
              </li>
              <li>
                <Link href="/collections/ao-so-mi" className="hover:text-white transition-colors">
                  May đo áo sơ mi vải Cotton Ai Cập
                </Link>
              </li>
              <li>
                <Link href="/collections/quan-au" className="hover:text-white transition-colors">
                  May đo quần âu cạp Gurkha, xếp ly
                </Link>
              </li>
              <li>
                <Link href="/pages/bao-hanh-tron-doi" className="hover:text-white transition-colors">
                  Chính sách chỉnh sửa miễn phí trọn đời
                </Link>
              </li>
              <li>
                <Link href="/pages/huong-dan-lay-so-do" className="hover:text-white transition-colors">
                  Hướng dẫn tự lấy số đo online
                </Link>
              </li>
              <li>
                <Link href="/pages/lien-he" className="hover:text-white transition-colors text-[#c5a880] font-medium">
                  Đặt lịch hẹn may đo & xem vải ↗
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Address & Google Maps Location */}
          <div className="space-y-5 lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              ĐỊA CHỈ NHÀ MAY
            </h4>
            <div className="space-y-3 text-xs text-stone-400">
              <div className="space-y-1.5">
                <span className="font-semibold text-stone-200 block">Nhà may MB VEST:</span>
                <p className="text-[11px] text-stone-300">
                  Nhà may MB VEST, Hà Nội, Việt Nam
                </p>
                <div className="mt-3 aspect-[16/10] w-full overflow-hidden border border-stone-800 bg-stone-900">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d807.7973294685968!2d105.8827778!3d20.7240575!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135c91dd951f101%3A0x78221c9f5e6cb5be!2sNh%C3%A0%20may%20MB%20VEST!5e1!3m2!1sen!2s!4v1786956301611!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Bản đồ vị trí Nhà may MB VEST"
                    className="w-full h-full"
                  />
                </div>
                <a
                  href="https://www.google.com/maps/place/Nhà+may+MB+VEST/@20.7240575,105.8827778,152m/data=!3m1!1e3!4m6!3m5!1s0x3135c91dd951f101:0x78221c9f5e6cb5be!8m2!3d20.7240734!4d105.8824261!16s%2Fg%2F11whfs0_cr"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 pt-1 text-xs font-semibold text-[#c5a880] transition-colors hover:text-white"
                >
                  <IconMapPin className="w-3.5 h-3.5" />
                  <span>Xem trên Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Contact Mr. Binh & Zalo */}
          <div className="space-y-5 lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              LIÊN HỆ TRỰC TIẾP
            </h4>
            <div className="space-y-4 text-xs text-stone-400">
              <div className="flex items-start gap-3 leading-relaxed">
                <IconPhone className="w-4 h-4 text-stone-300 flex-shrink-0" />
                <span>Điện thoại: <a href="tel:0904989326" className="font-medium text-white transition-colors hover:text-[#c5a880]">0904 989 326</a><br /><span className="text-stone-500">Mr. Bình · Tư vấn may đo</span></span>
              </div>
              <div className="flex items-start gap-3 leading-relaxed">
                <IconChat className="w-4 h-4 text-stone-300 flex-shrink-0" />
                <span>Zalo tư vấn: <a href="https://zalo.me/0904989326" target="_blank" rel="noreferrer" className="font-medium text-white transition-colors hover:text-[#c5a880]">0904 989 326</a></span>
              </div>
              <div className="flex items-start gap-3 leading-relaxed">
                <IconMail className="w-4 h-4 text-stone-300 flex-shrink-0" />
                <a href="mailto:mbvest.tailor@gmail.com" className="break-all transition-colors hover:text-white">mbvest.tailor@gmail.com</a>
              </div>
            </div>

            {/* Quick Zalo Chat Button */}
            <div className="pt-2">
              <a
                href="https://zalo.me/0904989326"
                target="_blank"
                rel="noreferrer"
                className="flex min-h-12 w-full items-center justify-center gap-2 border border-stone-700 bg-stone-900 px-4 py-2.5 text-center text-[11px] font-medium uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:border-white hover:bg-white hover:text-stone-950"
              >
                <IconChat className="w-4 h-4" />
                <span>Nhắn tin tư vấn với Mr. Bình</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 px-4 pt-6 text-[11px] text-stone-500 sm:px-6 md:flex-row lg:px-8">
        <p>© 2026 NHÀ MAY MB VEST. TẤT CẢ CÁC QUYỀN ĐƯỢC BẢO LƯU.</p>
        <div className="flex items-center space-x-6 text-[11px]">
          <a
            href="https://www.google.com/maps/place/Nhà+may+MB+VEST/@20.7240575,105.8827778,152m/data=!3m1!1e3!4m6!3m5!1s0x3135c91dd951f101:0x78221c9f5e6cb5be!8m2!3d20.7240734!4d105.8824261!16s%2Fg%2F11whfs0_cr"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-[#c5a880]"
          >
            Google Maps MB VEST
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex items-center gap-1.5 text-stone-300 hover:text-white transition-colors"
          >
            <span>Lên đầu trang</span>
            <IconArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Mobile Sticky Quick Action Bar */}
      <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 bg-[#0d0c0b]/95 px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 text-white shadow-[0_-8px_30px_rgba(0,0,0,0.28)] backdrop-blur-md lg:hidden">
        <a
          href="tel:0904989326"
          aria-label="Gọi Mr. Bình: 0904 989 326"
          className="flex min-h-11 flex-col items-center justify-center gap-1 text-stone-300 transition-colors hover:text-white"
        >
          <IconPhone className="h-5 w-5 text-[#c5a880]" />
          <span className="text-[9px] font-medium uppercase tracking-[0.16em]">Gọi ngay</span>
        </a>
        <a
          href="https://zalo.me/0904989326"
          target="_blank"
          rel="noreferrer"
          aria-label="Nhắn tin Zalo với Mr. Bình"
          className="flex min-h-11 flex-col items-center justify-center gap-1 text-stone-300 transition-colors hover:text-white"
        >
          <IconChat className="h-5 w-5 text-[#c5a880]" />
          <span className="text-[9px] font-medium uppercase tracking-[0.16em]">Nhắn Zalo</span>
        </a>
        <a
          href="https://www.google.com/maps/place/Nhà+may+MB+VEST/@20.7240575,105.8827778,152m/data=!3m1!1e3!4m6!3m5!1s0x3135c91dd951f101:0x78221c9f5e6cb5be!8m2!3d20.7240734!4d105.8824261!16s%2Fg%2F11whfs0_cr"
          target="_blank"
          rel="noreferrer"
          aria-label="Chỉ đường đến Nhà may MB VEST"
          className="flex min-h-11 flex-col items-center justify-center gap-1 text-stone-300 transition-colors hover:text-white"
        >
          <IconMapPin className="h-5 w-5 text-[#c5a880]" />
          <span className="text-[9px] font-medium uppercase tracking-[0.16em]">Chỉ đường</span>
        </a>
      </div>
      </div>
    </footer>
  );
};
