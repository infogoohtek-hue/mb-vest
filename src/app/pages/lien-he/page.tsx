import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  IconPhone,
  IconChat,
  IconMapPin,
  IconScissors,
  IconShieldCheck,
  IconChevronRight,
  IconCheck,
} from "@/components/icons/Icons";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactFaq } from "@/components/contact/ContactFaq";

export const metadata: Metadata = {
  title: "Liên Hệ Nhà May MB VEST | Đặt Lịch May Đo Suit & Âu Phục Hà Nội",
  description:
    "Liên hệ Nhà may MB VEST tại Hà Nội để được tư vấn phom dáng, chất liệu vải Linen & đặt lịch may đo trực tiếp cùng Mr. Bình (0904 989 326). Dịch vụ may đo tận nơi.",
  openGraph: {
    title: "Liên Hệ Nhà May MB VEST | Đặt Lịch May Đo Suit & Âu Phục Thủ Công",
    description:
      "Tư vấn phom dáng 1-1 cùng thợ may chính Mr. Bình. Đặt lịch ghé xưởng may hoặc dịch vụ may đo tận nơi theo yêu cầu.",
    url: "https://mbvest.vn/pages/lien-he",
    siteName: "MB VEST",
    locale: "vi_VN",
    type: "website",
  },
};

const mapsUrl =
  "https://www.google.com/maps/place/Nhà+may+MB+VEST/@20.7240575,105.8827778,152m/data=!3m1!1e3!4m6!3m5!1s0x3135c91dd951f101:0x78221c9f5e6cb5be!8m2!3d20.7240734!4d105.8824261!16s%2Fg%2F11whfs0_cr";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Lắng Nghe & Định Hình",
    description:
      "Mr. Bình trực tiếp trao đổi về dịp mặc (cưới hỏi, công sở, tiệc tối), gu ăn mặc và mong muốn riêng để định hình phom dáng phù hợp nhất với vóc dáng của bạn.",
  },
  {
    step: "02",
    title: "Chọn Vải & Đo Phom",
    description:
      "Quý khách chạm tay vào hàng trăm mẫu vải Linen, len Ý, cotton cao cấp; sau đó tiến hành lấy hơn 20 thông số đo đạc chi tiết trên cơ thể.",
  },
  {
    step: "03",
    title: "Thử Đồ (Fitting)",
    description:
      "Buổi thử phom trung gian giúp tinh chỉnh ve áo, độ ôm eo, độ suông của quần và độ dài tay áo đến từng milimet trước khi hoàn thiện thủ công.",
  },
  {
    step: "04",
    title: "Bàn Giao & Bảo Hành",
    description:
      "Nhận bộ trang phục hoàn chỉnh cùng sự an tâm tuyệt đối với chính sách bảo hành, chỉnh sửa phom dáng miễn phí trọn đời từ MB VEST.",
  },
];

export default function ContactPage() {
  // Structured Data Schema for LocalBusiness
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Nhà may MB VEST",
    image: "https://mbvest.vn/images/pruducts/xanh_navy.jpg",
    telephone: "0904 989 326",
    email: "mbvest.tailor@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nhà may MB VEST",
      addressLocality: "Hà Nội",
      addressRegion: "Hà Nội",
      addressCountry: "VN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 20.7240734,
      longitude: 105.8824261,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:30",
        closes: "21:00",
      },
    ],
    priceRange: "1.800.000đ - 45.000.000đ",
  };

  return (
    <div className="bg-[#f7f5f0] text-stone-900 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ===================================================================== */}
      {/* 1. HERO SECTION                                                       */}
      {/* ===================================================================== */}
      <section className="relative isolate overflow-hidden bg-stone-950 text-white">
        <Image
          src="/images/about-atelier-hero.png"
          alt="Không gian nhà may MB VEST"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[72%_center] lg:object-center"
        />
        <div className="absolute inset-0 -z-10 bg-black/60 lg:bg-transparent" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav
            aria-label="Đường dẫn trang"
            className="flex items-center gap-3 py-5 text-[11px] uppercase tracking-wider text-stone-300"
          >
            <Link href="/" className="transition-colors hover:text-[#c5a880]">
              Trang chủ
            </Link>
            <span aria-hidden="true" className="text-stone-600">
              /
            </span>
            <span aria-current="page" className="text-white font-medium">
              Liên hệ
            </span>
          </nav>

          <div className="flex min-h-[50vh] sm:min-h-[56vh] items-center py-12 lg:py-16">
            <div className="max-w-2xl">
              <h1 className="font-heading text-4xl leading-[1.25] sm:text-5xl lg:text-6xl sm:leading-[1.2]">
                Sự vừa vặn hoàn hảo,
                <br />
                <span className="text-[#e6c987]">
                  từ cuộc trò chuyện.
                </span>
              </h1>

              <div className="my-8 h-px w-16 bg-[#c5a880]" />

              <p className="text-sm sm:text-base leading-7 text-stone-200 max-w-xl">
                Dành thời gian trao đổi kỹ lưỡng về vóc dáng, chất liệu và dịp mặc. 
                Mr. Bình và đội ngũ MB VEST luôn sẵn lòng đón tiếp quý khách tại xưởng may 
                hoặc mang thước đo và catalogue vải phục vụ tận nơi theo lịch hẹn riêng.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="tel:0904989326"
                  className="inline-flex items-center justify-center gap-2 bg-[#c5a880] hover:bg-[#d6b991] text-stone-950 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.18em] transition-all shadow-sm active:scale-95"
                >
                  <IconPhone className="w-4 h-4" />
                  <span>Gọi Mr. Bình (0904 989 326)</span>
                </a>

                <a
                  href="https://zalo.me/0904989326"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-white/60 hover:bg-white hover:text-stone-950 text-white px-6 py-3.5 text-xs font-bold uppercase tracking-[0.18em] transition-all focus-visible:outline focus-visible:outline-2"
                >
                  <IconChat className="w-4 h-4" />
                  <span>Nhắn Zalo 1-1</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 2. DIRECT CHANNEL CARDS                                               */}
      {/* ===================================================================== */}
      <section className="relative z-10 -mt-8 sm:-mt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Hotline */}
          <div className="bg-white border border-stone-200/80 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-stone-900 text-amber-300 flex items-center justify-center mb-3">
                <IconPhone className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 block mb-1">
                Thợ may chính
              </span>
              <h3 className="font-heading text-lg font-normal text-stone-900">
                Mr. Bình · Tư Vấn
              </h3>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                Hỗ trợ giải đáp số đo, phom dáng và chọn vải 24/7.
              </p>
            </div>
            <a
              href="tel:0904989326"
              className="mt-4 pt-3 border-t border-stone-100 text-xs font-bold text-amber-800 hover:text-stone-950 flex items-center justify-between"
            >
              <span>0904 989 326</span>
              <IconChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Zalo */}
          <div className="bg-white border border-stone-200/80 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#0068FF] text-white flex items-center justify-center mb-3">
                <IconChat className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 block mb-1">
                Chat trực tiếp 1-1
              </span>
              <h3 className="font-heading text-lg font-normal text-stone-900">
                Zalo MB VEST
              </h3>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                Gửi ảnh mẫu vest yêu thích để nhận báo giá & tư vấn nhanh.
              </p>
            </div>
            <a
              href="https://zalo.me/0904989326"
              target="_blank"
              rel="noreferrer"
              className="mt-4 pt-3 border-t border-stone-100 text-xs font-bold text-[#0068FF] hover:text-blue-800 flex items-center justify-between"
            >
              <span>Nhắn tin qua Zalo ↗</span>
              <IconChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3: Address */}
          <div className="bg-white border border-stone-200/80 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-stone-100 text-stone-800 flex items-center justify-center mb-3">
                <IconMapPin className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 block mb-1">
                Không gian xưởng may
              </span>
              <h3 className="font-heading text-lg font-normal text-stone-900">
                Xưởng May MB VEST
              </h3>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                Nhà may MB VEST, Hà Nội, Việt Nam. Có chỗ đỗ xe thuận tiện.
              </p>
            </div>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 pt-3 border-t border-stone-100 text-xs font-bold text-stone-800 hover:text-black flex items-center justify-between"
            >
              <span>Xem Google Maps ↗</span>
              <IconChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 4: Operating Hours */}
          <div className="bg-white border border-stone-200/80 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-800 border border-amber-200/60 flex items-center justify-center mb-3">
                <IconScissors className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 block mb-1">
                Thời gian phục vụ
              </span>
              <h3 className="font-heading text-lg font-normal text-stone-900">
                08:30 – 21:00
              </h3>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                Mở cửa tất cả các ngày trong tuần. Linh hoạt theo lịch hẹn riêng.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-xs text-stone-500 flex items-center justify-between">
              <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Đang nhận lịch hẹn
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 3. BOOKING FORM & ATELIER PRIVILEGES                                  */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left: Interactive Form (7 Cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right: Atelier Privileges & Quality Promises (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white border border-stone-200 rounded-lg p-6 sm:p-8 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#c5a880]">
                    ĐẶC QUYỀN KHI MAY ĐO TẠI MB VEST
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl text-stone-900 font-normal mt-1">
                    Trải Nghiệm May Đo Cá Nhân Hóa
                  </h3>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-stone-600">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      <IconCheck className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-stone-900 block mb-0.5">Tư vấn 1-1 cùng thợ may chính:</strong>
                      Mr. Bình trực tiếp phân tích cấu trúc vóc dáng (vai xuôi, vai ngang, lưng gù...) để lựa chọn kết cấu dựng ve và độ dài áo hoàn mỹ.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      <IconCheck className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-stone-900 block mb-0.5">Kho vải Linen & Wool cao cấp phong phú:</strong>
                      Hàng trăm dòng vải mộc Linen tự nhiên thoáng khí, Linen pha Wool đứng phom và Cotton Ai Cập luôn có sẵn mẫu swatch thực tế.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      <IconCheck className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-stone-900 block mb-0.5">Dịch vụ may đo tận nơi thuận tiện:</strong>
                      Không mất thời gian di chuyển trong giờ làm việc. Thợ may đến tận nơi tư vấn và lấy số đo chi tiết theo lịch của quý khách.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      <IconShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <strong className="text-stone-900 block mb-0.5">Bảo hành & chỉnh sửa phom dáng trọn đời:</strong>
                      Hỗ trợ bóp, nới eo, điều chỉnh gấu quần hoàn toàn miễn phí trọn đời khi cơ thể có sự thay đổi cân nặng.
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Atelier Card */}
              <div className="relative rounded-lg overflow-hidden border border-stone-200 aspect-[16/10] group">
                <Image
                  src="/images/pruducts/xanh_navy.jpg"
                  alt="Suit may đo thủ công MB VEST"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-amber-300 font-semibold mb-1">
                    CHỈN CHU TRONG TỪNG ĐƯỜNG KIM
                  </span>
                  <p className="font-heading text-lg font-normal">
                    &ldquo;Trang phục đẹp nhất là trang phục vừa vặn với riêng bạn.&rdquo;
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 4. ATELIER LOCATION & INTERACTIVE GOOGLE MAP                          */}
      {/* ===================================================================== */}
      <section className="border-y border-stone-200 bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#c5a880]">
              TỌA ĐỘ NHÀ MAY
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-stone-900 font-normal mt-2">
              Ghé Thăm Xưởng May MB VEST
            </h2>
            <p className="text-sm text-stone-600 mt-3 leading-relaxed">
              Xưởng may MB VEST tọa lạc tại vị trí yên tĩnh, thoáng đãng với không gian thử đồ riêng tư, 
              đầy đủ ánh sáng tự nhiên để quý khách cảm nhận chân thực nhất màu sắc và chất liệu của từng thước vải.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Directions & Highlights (5 Cols) */}
            <div className="lg:col-span-5 bg-[#f7f5f0] border border-stone-200 rounded-lg p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div>
                  <h3 className="font-heading text-xl text-stone-900 font-normal">
                    Nhà May MB VEST
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    May đo Suit, Vest cưới & Âu phục nam thủ công cao cấp
                  </p>
                </div>

                <div className="space-y-3.5 text-xs text-stone-700">
                  <div className="flex items-start gap-3">
                    <IconMapPin className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-stone-900">Địa chỉ xưởng:</strong>
                      <span>Nhà may MB VEST, Hà Nội, Việt Nam</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <IconPhone className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-stone-900">Điện thoại / Hotline:</strong>
                      <a href="tel:0904989326" className="text-amber-900 font-bold hover:underline">
                        0904 989 326 (Mr. Bình)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <IconScissors className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-stone-900">Tiện ích tại nhà may:</strong>
                      <ul className="list-disc list-inside space-y-1 text-stone-600 mt-1">
                        <li>Bãi đỗ ô tô và xe máy rộng rãi, an toàn</li>
                        <li>Phòng thử đồ riêng tư trang bị gương toàn thân đa góc</li>
                        <li>Trà nóng & tư vấn trực tiếp cùng thợ may chính</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-300 flex flex-col sm:flex-row gap-3">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-stone-950 hover:bg-black text-white px-5 py-3 rounded text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <IconMapPin className="w-4 h-4 text-[#c5a880]" />
                  <span>Chỉ đường trên Google Maps ↗</span>
                </a>

                <a
                  href="https://zalo.me/0904989326"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-stone-400 hover:border-stone-900 text-stone-800 px-5 py-3 rounded text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <IconChat className="w-4 h-4 text-[#0068FF]" />
                  <span>Chat Zalo trước khi qua</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Maps (7 Cols) */}
            <div className="lg:col-span-7 h-[360px] sm:h-[440px] rounded-lg overflow-hidden border border-stone-300 shadow-xs relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d807.7973294685968!2d105.8827778!3d20.7240575!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135c91dd951f101%3A0x78221c9f5e6cb5be!2sNh%C3%A0%20may%20MB%20VEST!5e1!3m2!1sen!2s!4v1786956301611!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Bản đồ chỉ đường đến Nhà may MB VEST"
                className="w-full h-full"
              />
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 5. 4-STEP TAILORING JOURNEY                                           */}
      {/* ===================================================================== */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#c5a880]">
              QUY TRÌNH TIẾP ĐÓN
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-stone-900 font-normal mt-2">
              Hành Trình Đến Bộ Suit Hoàn Hảo
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-2">
              4 bước minh bạch và chu đáo để quý khách luôn an tâm từ lần gặp đầu tiên
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="bg-white border border-stone-200/90 rounded-lg p-6 flex flex-col justify-between hover:border-stone-400 transition-colors shadow-xs"
              >
                <div>
                  <span className="font-heading text-3xl sm:text-4xl text-[#c5a880] font-normal block mb-4">
                    {step.step}
                  </span>
                  <h3 className="font-heading text-lg font-normal text-stone-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 6. FREQUENTLY ASKED QUESTIONS (FAQ)                                   */}
      {/* ===================================================================== */}
      <section className="border-t border-stone-200 bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#c5a880]">
              CÂU HỎI THƯỜNG GẶP
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-stone-900 font-normal mt-2">
              Giải Đáp Trước Khi Ghé Thăm
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-2">
              Những thông tin hữu ích giúp quý khách thuận tiện hơn khi lên kế hoạch may đo
            </p>
          </div>

          <ContactFaq />

          <div className="mt-12 text-center p-6 bg-[#f7f5f0] border border-stone-200 rounded-lg">
            <p className="text-xs sm:text-sm text-stone-700">
              Quý khách còn thắc mắc về chất liệu vải hoặc thời gian hoàn thiện?
            </p>
            <div className="mt-3 flex items-center justify-center gap-4">
              <a
                href="tel:0904989326"
                className="text-xs font-bold text-amber-900 hover:underline flex items-center gap-1.5"
              >
                <IconPhone className="w-3.5 h-3.5" />
                <span>Gọi 0904 989 326</span>
              </a>
              <span className="text-stone-300">|</span>
              <a
                href="https://zalo.me/0904989326"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-[#0068FF] hover:underline flex items-center gap-1.5"
              >
                <IconChat className="w-3.5 h-3.5" />
                <span>Nhắn tin Zalo Mr. Bình</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
