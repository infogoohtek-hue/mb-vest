import { NavItem, Product } from "../types";

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    title: "TRANG CHỦ",
    href: "/",
  },
  {
    title: "SẢN PHẨM",
    href: "/collections/tat-ca",
  },
  {
    title: "DỊCH VỤ",
    href: "/collections/dich-vu",
    children: [
      {
        categoryTitle: "CÁC GÓI MAY ĐO",
        categorySubtitle: "May đo thủ công theo số đo riêng",
        items: [
          {
            title: "Áo Lẻ (Jacket / Blazer)",
            href: "/collections/dich-vu#ao-le",
            badge: "Hot",
            description: "Trẻ trung, linh hoạt phối cùng jeans & chinos",
            price: "Từ 1.800.000đ",
          },
          {
            title: "Bộ Suit 2 Mảnh",
            href: "/collections/dich-vu#suit-2-manh",
            badge: "Bán chạy",
            description: "Áo vest & Quần âu đồng bộ cho công sở và sự kiện",
            price: "Từ 2.500.000đ",
          },
          {
            title: "Bộ Suit 3 Mảnh",
            href: "/collections/dich-vu#suit-3-manh",
            badge: "Cao cấp",
            description: "Áo vest + Gile + Quần âu chuẩn phong thái quý ông",
            price: "Từ 3.300.000đ",
          },
        ],
      },
      {
        categoryTitle: "ĐẶC QUYỀN NHÀ MAY",
        categorySubtitle: "Dịch vụ tận tâm & cam kết trọn đời",
        items: [
          {
            title: "May Đo Tận Nơi Theo Yêu Cầu",
            href: "/collections/dich-vu",
            icon: "pin",
            description: "Tư vấn chất liệu và lấy số đo tại gia hoặc cơ quan",
            price: "Khu vực Hà Nội",
          },
          {
            title: "Bảo Hành & Chỉnh Sửa Trọn Đời",
            href: "/pages/about-us",
            icon: "scissors",
            description: "Miễn phí nới/bóp phom theo sự thay đổi của vóc dáng",
            price: "Miễn phí 100%",
          },
          {
            title: "Tư Vấn 1-1 Cùng Mr. Bình",
            href: "https://zalo.me/0904989326",
            icon: "chat",
            description: "Hẹn lịch riêng định hình phong cách & chọn vải",
            price: "Hotline: 0904 989 326",
          },
        ],
      },
    ],
  },


  {
    title: "VỀ NHÀ MAY",
    href: "/pages/about-us",
  },
  // Tạm thời ẩn mục LIÊN HỆ trên navbar:
  // {
  //   title: "LIÊN HỆ",
  //   href: "/pages/lien-he",
  // },
];

export const MOCK_PRODUCTS: Product[] = [
  { id: "mb-01", name: "Bộ Suit 2 Mảnh", category: "VEST MAY ĐO", price: 2500000, originalPrice: 3200000, image: "/images/pruducts/2_manh.png", hoverImage: "/images/pruducts/2_manh.png", colors: ["#1c1c1c"], tag: "BÁN CHẠY", isNew: true, rating: 5.0, reviewCount: 184 },
  { id: "mb-02", name: "Áo Lẻ (Jacket)", category: "VEST MAY ĐO", price: 1800000, originalPrice: 2400000, image: "/images/pruducts/ao_le.jpg", hoverImage: "/images/pruducts/ao_le.jpg", colors: ["#4a4a4a"], tag: "ÁO LẺ", rating: 5.0, reviewCount: 96 },
  { id: "mb-03", name: "Suit Đen", category: "SUIT CƯỚI", price: 2500000, originalPrice: 3200000, image: "/images/pruducts/den.jpg", hoverImage: "/images/pruducts/den.jpg", colors: ["#0a0a0a"], tag: "SUIT CƯỚI", rating: 5.0, reviewCount: 245 },
  { id: "mb-04", name: "Suit Kẻ Sọc Đen", category: "VEST MAY ĐO", price: 2500000, originalPrice: 3200000, image: "/images/pruducts/ke_sec_den.png", hoverImage: "/images/pruducts/ke_sec_den.png", colors: ["#1a1a1a"], rating: 5.0, reviewCount: 110 },
  { id: "mb-05", name: "Suit Kẻ Sọc Xám", category: "VEST MAY ĐO", price: 2500000, originalPrice: 3200000, image: "/images/pruducts/ke_soc_xam.png", hoverImage: "/images/pruducts/ke_soc_xam.png", colors: ["#606060"], tag: "MỚI", rating: 4.8, reviewCount: 88 },
  { id: "mb-06", name: "Suit Màu Be", category: "SUIT CƯỚI", price: 2500000, originalPrice: 3200000, image: "/images/pruducts/mau_be.png", hoverImage: "/images/pruducts/mau_be.png", colors: ["#d2b48c"], tag: "SUIT CƯỚI", rating: 5.0, reviewCount: 154 },
  { id: "mb-07", name: "Suit Nâu", category: "VEST MAY ĐO", price: 2500000, originalPrice: 3200000, image: "/images/pruducts/nau.jpg", hoverImage: "/images/pruducts/nau.jpg", colors: ["#8b4513"], rating: 4.9, reviewCount: 130 },
  { id: "mb-08", name: "Suit Xám Tiêu", category: "VEST MAY ĐO", price: 3300000, originalPrice: 4200000, image: "/images/pruducts/xam_tieu.png", hoverImage: "/images/pruducts/xam_tieu.png", colors: ["#505050"], tag: "3 MẢNH", rating: 5.0, reviewCount: 142 },
  { id: "mb-09", name: "Suit Xám Tối", category: "VEST MAY ĐO", price: 2500000, originalPrice: 3200000, image: "/images/pruducts/xam_toi.png", hoverImage: "/images/pruducts/xam_toi.png", colors: ["#303030"], rating: 4.8, reviewCount: 92 },
  { id: "mb-10", name: "Suit Xanh Đen", category: "VEST MAY ĐO", price: 2500000, originalPrice: 3200000, image: "/images/pruducts/xanh-den.png", hoverImage: "/images/pruducts/xanh-den.png", colors: ["#0a192f"], rating: 4.9, reviewCount: 175 },
  { id: "mb-11", name: "Suit Xanh", category: "VEST MAY ĐO", price: 2500000, originalPrice: 3200000, image: "/images/pruducts/xanh.jpg", hoverImage: "/images/pruducts/xanh.jpg", colors: ["#2563eb"], tag: "TRẺ TRUNG", rating: 4.7, reviewCount: 80 },
  { id: "mb-12", name: "Suit Xanh Navy", category: "VEST MAY ĐO", price: 2500000, originalPrice: 3200000, image: "/images/pruducts/xanh_navy.jpg", hoverImage: "/images/pruducts/xanh_navy.jpg", colors: ["#1d4ed8"], tag: "BÁN CHẠY", isNew: true, rating: 5.0, reviewCount: 310 }
];

export const ANNOUNCEMENT_MESSAGES = [
  "May đo Suit & Vest nam cao cấp tại Hà Nội",
  "Tư vấn phom dáng và chọn vải cùng Mr. Bình",
  "Bảo hành và chỉnh sửa phom dáng trọn đời",
  "Đặt lịch may đo trực tiếp hoặc qua Zalo",
];

export const STORE_LOCATIONS = [
  {
    city: "Hà Nội",
    stores: [
      {
        name: "Nhà may MB VEST",
        address: "Nhà may MB VEST, Hà Nội",
        phone: "0904 989 326 (Mr. Bình)",
        mapUrl: "https://www.google.com/maps/place/Nhà+may+MB+VEST/@20.7240575,105.8827778,152m/data=!3m1!1e3!4m6!3m5!1s0x3135c91dd951f101:0x78221c9f5e6cb5be!8m2!3d20.7240734!4d105.8824261!16s%2Fg%2F11whfs0_cr",
      },
    ],
  },
];
