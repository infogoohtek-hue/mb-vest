import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CraftsmanshipVideo } from "@/components/home/CraftsmanshipVideo";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Về nhà may | MB VEST",
  description: "Khám phá nhà may MB VEST: phom dáng may đo riêng, chất liệu Linen và sự chỉn chu trong từng đường cắt. Tư vấn trực tiếp cùng Mr. Bình.",
};

const values = [
  { title: "Vừa vặn với riêng bạn", text: "Phom dáng được dựng theo số đo và vóc dáng từng khách hàng, để bộ suit phù hợp cả khi đứng, ngồi và chuyển động." },
  { title: "Chất liệu có chủ đích", text: "Linen và các dòng Linen pha được lựa chọn theo độ thoáng, độ đứng phom và bề mặt vải, phù hợp với nhu cầu sử dụng." },
  { title: "Đồng hành sau khi may", text: "Dịch vụ bảo hành và chỉnh sửa phom dáng miễn phí trọn đời giúp bạn tiếp tục chăm chút cho bộ suit của mình." },
];

const fabrics = [
  ["100% Linen", "Thoáng, nhẹ, tự nhiên", "Dành cho người yêu bề mặt mộc mạc và những nếp nhăn đặc trưng của Linen."],
  ["Linen + Wool", "Lịch sự, đứng phom", "Lựa chọn cho bộ vest cần vẻ chỉn chu và ít nhăn hơn Linen thuần."],
  ["Linen + Silk", "Mềm mại, bóng nhẹ", "Bề mặt giàu sắc thái, phù hợp khi bạn muốn một điểm nhấn tinh tế."],
  ["Linen + Cotton", "Thoải mái, dễ mặc", "Gợi ý cho vest casual và những bộ summer suit nhẹ nhàng."],
];

const mapsUrl = "https://www.google.com/maps/place/Nhà+may+MB+VEST/@20.7240575,105.8827778,152m/data=!3m1!1e3!4m6!3m5!1s0x3135c91dd951f101:0x78221c9f5e6cb5be!8m2!3d20.7240734!4d105.8824261!16s%2Fg%2F11whfs0_cr";
const container = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";
const eyebrow = "text-xs font-semibold uppercase tracking-[0.22em] text-amber-800";

export default function AboutPage() {
  return (
    <div className="bg-[#f7f5f0] text-stone-900">
      <section aria-labelledby="about-title" className="relative isolate overflow-hidden bg-stone-950 text-white">
        <Image src="/images/about-atelier-hero.png" alt="" fill priority sizes="100vw" className="-z-20 object-cover object-[72%_center] lg:object-center" />
        <div className="absolute inset-0 -z-10 bg-black/60 lg:bg-transparent" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        <div className={container}>
        <nav aria-label="Đường dẫn trang" className="flex items-center gap-3 py-5 text-[11px] uppercase tracking-wider text-stone-300">
          <Link href="/" className="transition-colors hover:text-amber-800">Trang chủ</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page" className="text-white">Về nhà may</span>
        </nav>
        <div className="flex min-h-[68svh] items-center py-14 sm:min-h-[72svh] lg:py-20">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a880]">Nhà may MB VEST · Hà Nội</p>
            <h1 id="about-title" className="mt-6 font-heading text-4xl leading-[1.2] sm:text-5xl lg:text-6xl">
              Sự lịch lãm,<br /><span className="text-[#e6c987]">được may riêng.</span>
            </h1>
            <div className="my-8 h-px w-16 bg-[#c5a880]" />
            <p className="max-w-lg text-sm leading-7 text-stone-200 sm:text-base sm:leading-8">
              Một bộ suit đẹp bắt đầu từ việc hiểu người mặc. Tại MB VEST, chúng tôi cùng bạn lựa chọn chất liệu, phom dáng và từng chi tiết để tạo nên trang phục phù hợp với vóc dáng và phong cách riêng.
            </p>
            <p className="mt-5 max-w-lg text-sm leading-7 text-stone-300">
              Từ bộ vest cho công việc, chiếc jacket thường ngày đến suit cho ngày cưới, sự vừa vặn và cảm giác thoải mái luôn là điều chúng tôi hướng đến.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="https://zalo.me/0904989326" variant="gold">Đặt hẹn với Mr. Bình</Button>
              <Link href="/collections/dich-vu" className="inline-flex items-center justify-center border border-white/60 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.18em] transition-colors hover:bg-white hover:text-stone-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Dịch vụ may đo</Link>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section aria-labelledby="philosophy-title" className="border-y border-stone-200 bg-white py-16 lg:py-20">
        <div className={container}>
          <div className="max-w-2xl">
            <p className={eyebrow}>Triết lý may đo</p>
            <h2 id="philosophy-title" className="mt-4 font-heading text-3xl leading-snug sm:text-4xl">Vẻ ngoài chỉn chu.<br />Cảm giác thật tự nhiên.</h2>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
            {values.map((value, index) => (
              <article key={value.title} className="border-t border-stone-300 pt-6">
                <span className="text-sm italic text-amber-800">0{index + 1}</span>
                <h3 className="mt-5 text-xl">{value.title}</h3>
                <p className="mt-4 text-sm leading-7 text-stone-600">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="workshop-title" className={`${container} grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-20 lg:py-24`}>
        <div>
          <CraftsmanshipVideo
            src="/videos/ve_nha_may_web.mp4"
            fallbackSrc="/videos/ve_nha_may_web.mp4"
            poster="/images/ve-nha-may-poster.jpg"
            title="Về nhà may MB VEST"
            description="Khám phá nhà may · 2:12"
            caption="Ghé thăm nhà may MB VEST qua những hình ảnh thực tế."
          />
        </div>
        <div>
          <p className={eyebrow}>Một góc xưởng MB VEST</p>
          <h2 id="workshop-title" className="mt-5 font-heading text-3xl leading-snug sm:text-4xl">Từ bàn tay người thợ,<br />đến bộ suit của bạn.</h2>
          <p className="mt-6 text-sm leading-7 text-stone-700">Ghé thăm MB VEST qua video giới thiệu nhà may, để tìm hiểu thêm về nơi những bộ suit của bạn được chăm chút.</p>
          <p className="mt-5 text-sm leading-7 text-stone-600">Mr. Bình và đội ngũ MB VEST tư vấn định lượng vải, màu sắc và kiểu dệt theo nhu cầu sử dụng, trước khi dựng phom thủ công theo vóc dáng từng khách hàng.</p>
          <div className="mt-8 border-l-2 border-[#c5a880] pl-6">
            <p className="text-xl italic leading-relaxed text-stone-800">Sự chỉn chu bắt đầu từ những thao tác nhỏ nhất.</p>
          </div>
          <div className="mt-8"><Button href="https://zalo.me/0904989326" variant="outline">Trao đổi cùng nhà may</Button></div>
        </div>
      </section>

      <section aria-labelledby="fabric-title" className="bg-stone-950 py-16 text-white lg:py-20">
        <div className={container}>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#c5a880]">Chất liệu chủ đạo</p>
              <h2 id="fabric-title" className="mt-4 text-3xl leading-snug sm:text-4xl">Linen, theo cách của bạn.</h2>
            </div>
            <p className="text-sm leading-7 text-stone-300 lg:pt-7">Mỗi tỷ lệ phối sợi mang lại một cảm giác khác nhau. MB VEST giúp bạn tìm chất liệu phù hợp với dịp mặc, độ đứng phom mong muốn và sự thoải mái khi sử dụng.</p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {fabrics.map(([name, title, text]) => (
              <article key={name} className="border-t border-stone-700 pt-6">
                <h3 className="text-xl text-[#e6c987]">{name}</h3>
                <p className="mt-4 text-sm text-white">{title}</p>
                <p className="mt-3 text-sm leading-7 text-stone-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="visit-title" className={`${container} py-16 lg:py-24`}>
        <div className="grid gap-10 border border-stone-300 bg-white p-6 sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:p-14">
          <div>
            <p className={eyebrow}>Hẹn gặp bạn tại nhà may</p>
            <h2 id="visit-title" className="mt-5 text-3xl leading-snug sm:text-4xl">Bắt đầu bằng<br />một cuộc trò chuyện.</h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-stone-600">Chia sẻ dịp mặc và phong cách bạn yêu thích. Mr. Bình sẽ cùng bạn lựa chọn chất liệu và kiểu dáng phù hợp trước khi bắt đầu may đo.</p>
            <div className="mt-7"><Button href="https://zalo.me/0904989326">Đặt lịch tư vấn qua Zalo</Button></div>
          </div>
          <address className="flex flex-col justify-center gap-6 border-t border-stone-200 pt-8 text-sm not-italic lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <div><p className="text-xs uppercase tracking-widest text-stone-500">Tư vấn trực tiếp · Mr. Bình</p><a href="tel:0904989326" className="mt-2 inline-block py-2 text-2xl hover:text-amber-800">0904 989 326</a></div>
            <div><p className="text-xs uppercase tracking-widest text-stone-500">Email</p><a href="mailto:mbvest.tailor@gmail.com" className="mt-2 inline-block break-all py-2 hover:text-amber-800">mbvest.tailor@gmail.com</a></div>
            <div><p className="leading-7">Nhà may MB VEST, Hà Nội, Việt Nam</p><a href={mapsUrl} target="_blank" rel="noreferrer" className="mt-2 inline-block py-2 text-amber-800 underline underline-offset-4">Xem đường đến nhà may ↗</a></div>
          </address>
        </div>
      </section>
    </div>
  );
}
