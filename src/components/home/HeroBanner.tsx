"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

export const HeroBanner: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const isDesktopQuery = window.matchMedia("(min-width: 640px)");
    let isIntersecting = true;

    const getActiveVideo = () => {
      return isDesktopQuery.matches ? desktopVideoRef.current : mobileVideoRef.current;
    };

    const getInactiveVideo = () => {
      return isDesktopQuery.matches ? mobileVideoRef.current : desktopVideoRef.current;
    };

    const updatePlayback = () => {
      const activeVideo = getActiveVideo();
      const inactiveVideo = getInactiveVideo();

      // Ensure inactive video is strictly paused to prevent dual-video CPU/GPU decode
      if (inactiveVideo && !inactiveVideo.paused) {
        inactiveVideo.pause();
      }

      if (activeVideo) {
        activeVideo.defaultMuted = true;
        activeVideo.muted = true;
        activeVideo.playsInline = true;

        if (isIntersecting && !document.hidden) {
          activeVideo.play().catch(() => {});
        } else {
          activeVideo.pause();
        }
      }
    };

    // Pause video when scrolled out of view to save CPU/GPU cycles
    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
        updatePlayback();
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const handleVisibility = () => updatePlayback();
    const handleResize = () => updatePlayback();

    document.addEventListener("visibilitychange", handleVisibility);
    isDesktopQuery.addEventListener("change", handleResize);

    updatePlayback();

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
      isDesktopQuery.removeEventListener("change", handleResize);
      mobileVideoRef.current?.pause();
      desktopVideoRef.current?.pause();
    };
  }, []);

  return (
    <section ref={containerRef} className="hero-banner relative w-full overflow-hidden bg-stone-950">
      {/* 1. Mobile View: Full Bleed 9:16 Video (Phù hợp hoàn hảo màn hình di động) */}
      <div className="block sm:hidden relative w-full aspect-[9/16] min-h-[500px] max-h-[85vh] overflow-hidden">
        <Link href="/collections/dich-vu" className="block w-full h-full relative">
          <video
            ref={mobileVideoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/images/pruducts/den.jpg"
            className="w-full h-full object-cover"
          >
            <source src="/videos/video_background_hero_mobile.webm" type="video/webm" />
            <source src="/videos/video_background_hero_mobile.mp4" type="video/mp4" />
            Trình duyệt của bạn không hỗ trợ thẻ video.
          </video>
        </Link>
      </div>

      {/* 2. Desktop View: Centered Video (Hiển thị đầy đủ video không bị cắt) */}
      <div className="hidden sm:flex justify-center items-center py-8 min-h-[600px] w-full">
        <div className="relative max-w-7xl mx-auto px-4 flex justify-center items-center w-full">
          <Link 
            href="/collections/dich-vu" 
            className="relative block overflow-hidden rounded-lg shadow-2xl group max-h-[75vh]"
          >
            <video
              ref={desktopVideoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="/images/pruducts/den.jpg"
              className="w-auto h-[75vh] max-h-[700px] object-contain mx-auto rounded-lg transition-transform duration-500 group-hover:scale-[1.01]"
            >
              <source src="/videos/video_background_hero_mobile.webm" type="video/webm" />
              <source src="/videos/video_background_hero_mobile.mp4" type="video/mp4" />
              Trình duyệt của bạn không hỗ trợ thẻ video.
            </video>
          </Link>
        </div>
      </div>
    </section>
  );
};
