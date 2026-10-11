"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { CartItem, Product } from "../types";
import { MOCK_PRODUCTS } from "../data/mockData";

interface CartContextType {
  cart: CartItem[];
  isCartOpen: boolean;
  isMobileMenuOpen: boolean;
  isSearchOpen: boolean;
  wishlist: string[];
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  openSearch: () => void;
  closeSearch: () => void;
  addToCart: (product: Product, quantity?: number, selectedColor?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  toggleWishlist: (productId: string) => void;
  totalItems: number;
  subtotal: number;
  freeShippingThreshold: number;
  remainingForFreeShipping: number;
  freeShippingProgress: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Prepopulate with a couple of mock items for demonstration
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: MOCK_PRODUCTS[0],
      quantity: 1,
      selectedColor: "#111111",
    },
    {
      product: MOCK_PRODUCTS[2],
      quantity: 1,
      selectedColor: "#5C4033",
    },
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>(["p1", "p4"]);

  const freeShippingThreshold = 499000;

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const openMobileMenu = () => setIsMobileMenuOpen(true);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  const addToCart = (product: Product, quantity = 1, selectedColor?: string) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity, selectedColor: selectedColor || item.selectedColor }
            : item
        );
      }
      return [...prev, { product, quantity, selectedColor: selectedColor || (product.colors ? product.colors[0] : undefined) }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  // Lock body scroll when modal or drawer is open
  useEffect(() => {
    if (isCartOpen || isMobileMenuOpen || isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCartOpen, isMobileMenuOpen, isSearchOpen]);

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        isMobileMenuOpen,
        isSearchOpen,
        wishlist,
        openCart,
        closeCart,
        toggleCart,
        openMobileMenu,
        closeMobileMenu,
        openSearch,
        closeSearch,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleWishlist,
        totalItems,
        subtotal,
        freeShippingThreshold,
        remainingForFreeShipping,
        freeShippingProgress,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
