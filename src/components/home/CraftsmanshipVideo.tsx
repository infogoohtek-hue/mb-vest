"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type CraftsmanshipVideoProps = {
  src?: string;
  poster?: string;
  title?: string;
  description?: string;
  caption?: string;
  fallbackSrc?: string;
};

export function CraftsmanshipVideo({
  src = "/videos/video_qua_trinh_lam.mp4",
  poster = "/images/quy-trinh-may-poster.jpg",
  title = "Một góc xưởng may",
  description = "Xem công đoạn cắt vải · 6:10",
  caption = "Những thao tác thực tế, từ bàn tay người thợ MB VEST.",
  fallbackSrc = "/videos/video_qua_trinh_lam.mp4",
}: CraftsmanshipVideoProps) {
  const [started, setStarted] = useState(false);
  const [failed, setFailed] = useState(false);
  const [visible, setVisible] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting && entry.intersectionRatio >= 0.25;
        setVisible(inView);
        if (inView) setStarted(true);
      },
      { threshold: [0, 0.25] }
    );
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const syncPlayback = () => {
      if (visible && !document.hidden) {
        // Native controls remain available if the browser blocks autoplay.
        void video.play().catch(() => {});
      } else {
        video.pause();
      }
    };
    syncPlayback();
    document.addEventListener("visibilitychange", syncPlayback);
    return () => {
      document.removeEventListener("visibilitychange", syncPlayback);
      video.pause();
    };
  }, [started, visible]);

  return (
    <figure className="mx-auto w-full max-w-[360px] lg:max-w-[400px]">
      <div ref={frameRef} className="relative aspect-[480/854] overflow-hidden rounded-lg border border-stone-300 bg-stone-950 shadow-xl">
        {started ? (
          <video
            ref={videoRef}
            className="h-full w-full object-contain"
            src={src}
            poster={poster}
            controls
            muted
            playsInline
            preload="none"
            aria-label={title}
            onError={() => setFailed(true)}
          >
            Trình duyệt của bạn không hỗ trợ video.
          </video>
        ) : (
          <button
            type="button"
            onClick={() => {
              setVisible(true);
              setStarted(true);
            }}
            aria-label={`Phát video ${title}: ${description}`}
            className="group absolute inset-0 w-full text-white focus-visible:outline focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-amber-300"
          >
            <Image
              src={poster}
              alt={title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/20" />
            <span className="absolute left-5 top-5 border border-white/40 bg-black/40 px-3 py-2 text-[10px] uppercase tracking-[0.2em]">
              Tại xưởng MB VEST
            </span>
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/80 bg-black/30 transition-colors group-hover:bg-black/60">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-current"><path d="M8 5v14l11-7z" /></svg>
              </span>
            </span>
            <span className="absolute inset-x-6 bottom-7 text-left">
              <span className="block font-heading text-2xl leading-snug">{title}</span>
              <span className="mt-3 block text-xs tracking-wide text-stone-200">{description}</span>
            </span>
          </button>
        )}
      </div>
      {failed && (
        <p role="alert" className="mt-3 text-sm text-stone-700">
          Video chưa tải được. <a className="underline underline-offset-4" href={fallbackSrc}>Mở video gốc</a>
        </p>
      )}
      <figcaption className="mt-4 text-center text-xs leading-relaxed text-stone-600">
        {caption}
      </figcaption>
    </figure>
  );
}
