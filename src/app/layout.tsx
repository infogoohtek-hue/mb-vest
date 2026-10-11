import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "../context/CartContext";
import { AnnouncementBar } from "../components/layout/AnnouncementBar";
import { Header } from "../components/layout/Header";
import { MobileMenuDrawer } from "../components/layout/MobileMenuDrawer";
import { CartDrawer } from "../components/layout/CartDrawer";
import { SearchModal } from "../components/layout/SearchModal";
import { Footer } from "../components/layout/Footer";
import { ScrollToTop } from "../components/layout/ScrollToTop";

export const metadata: Metadata = {
  title: "Nhà may MB VEST | May đo Suit & Vest nam cao cấp tại Hà Nội",
  description:
    "Nhà may MB VEST chuyên may đo Suit cưới, Vest nam doanh nhân, Áo sơ mi & Quần âu cao cấp thủ công. Tư vấn may đo tận tình: Mr. Bình (0904 989 326). Bảo hành & chỉnh sửa trọn đời.",
  keywords: "MB VEST, Nhà may MB VEST, may đo vest nam, suit cưới hà nội, may đo suit, áo sơ mi nam, quần âu nam",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=JetBrains+Mono:wght@400;500;700&display=swap"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-stone-900 font-sans selection:bg-stone-950 selection:text-white antialiased">
        <CartProvider>
          <AnnouncementBar />
          <Header />
          <MobileMenuDrawer />
          <CartDrawer />
          <SearchModal />

          <main className="flex-1 w-full">{children}</main>

          <Footer />
          <ScrollToTop />
        </CartProvider>
      </body>
    </html>
  );
}
