export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage?: string;
  colors?: string[];
  tag?: string;
  isNew?: boolean;
  isSale?: boolean;
  rating?: number;
  reviewCount?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
}

export interface NavItem {
  title: string;
  href: string;
  badge?: string;
  isHot?: boolean;
  isSale?: boolean;
  children?: {
    categoryTitle: string;
    categorySubtitle?: string;
    items: {
      title: string;
      href: string;
      badge?: string;
      description?: string;
      price?: string;
      icon?: "scissors" | "pin" | "chat" | "sparkles";
    }[];
    featuredImage?: {
      src: string;
      title: string;
      subtitle: string;
      href: string;
    };
  }[];
}
