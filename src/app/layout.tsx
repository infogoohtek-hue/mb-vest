import type { Metadata } from "next";
import { Lora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../context/CartContext";
import { AnnouncementBar } from "../components/layout/AnnouncementBar";
import { Header } from "../components/layout/Header";
import { MobileMenuDrawer } from "../components/layout/MobileMenuDrawer";
import { CartDrawer } from "../components/layout/CartDrawer";
import { SearchModal } from "../components/layout/SearchModal";
import { Footer } from "../components/layout/Footer";
import { ScrollToTop } from "../components/layout/ScrollToTop";

// Primary Font: Lora (Contemporary elegant serif with excellent Vietnamese calligraphy curves)
const fontSans = Lora({
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const fontHeading = Lora({
  subsets: ["latin", "vietnamese"],
  variable: "--font-heading",
  weight: ["400", "500", "600"],
  display: "swap",
});

// Technical / Monospace Font
const fontMono = JetBrains_Mono({
  subsets: ["latin", "vietnamese"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
  display: "swap",
});

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
    <html
      lang="vi"
      className={`${fontSans.variable} ${fontHeading.variable} ${fontMono.variable}`}
    >
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
