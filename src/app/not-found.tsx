import Image from "next/image";
import Link from "next/link";
import { IconChevronRight } from "../components/icons/Icons";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[72svh] items-center overflow-hidden bg-stone-950 text-white sm:min-h-[76svh]">
      <Image
        src="/images/404-linen-suit.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[68%_center]"
      />

      <div className="absolute inset-0 -z-10 bg-black/55 sm:bg-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/80 to-black/20 sm:from-black/95 sm:via-black/65 sm:to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-xl">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#c5a880]">
            Mã lỗi 404
          </p>

          <h1 className="font-heading text-4xl font-normal leading-tight tracking-[0.04em] text-white sm:text-5xl lg:text-6xl">
            Không tìm thấy trang
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-7 text-stone-300 sm:text-base">
            Đường dẫn có thể đã thay đổi hoặc không còn tồn tại. Bạn có thể trở về
            trang chủ hoặc tiếp tục xem các mẫu suit Linen may đo của MB VEST.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center bg-white px-6 text-xs font-semibold uppercase tracking-[0.16em] text-stone-950 transition-colors duration-200 hover:bg-stone-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950"
            >
              Về trang chủ
            </Link>

            <Link
              href="/collections/vest-may-do"
              className="group inline-flex min-h-12 items-center justify-center gap-2 border border-white/50 px-6 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-200 hover:border-white hover:bg-white hover:text-stone-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950"
            >
              Xem mẫu may đo
              <IconChevronRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none" />
            </Link>
          </div>

          <p className="mt-8 text-xs text-stone-400">
            Cần hỗ trợ? Gọi Mr. Bình qua{" "}
            <a
              href="tel:0904989326"
              className="font-semibold text-stone-200 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              0904 989 326
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
