import { WixClient } from "@/context/wixContext";
import { currentCart } from "@wix/ecom";
import { create } from "zustand";

type CartState = {
  cart: currentCart.Cart;
  isLoading: boolean;
  counter: number;
  getCart: (wixClient: WixClient) => void;
  addItem: (wixClient: WixClient, productId: string, variantId: string, quantity: number) => void;
  removeItem: (wixClient: WixClient, itemId: string) => void;
};

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  isLoading: true,
  counter: 0,
  getCart: async (wixClient) => {
    try {
      const cart = await wixClient.currentCart.getCurrentCart();
      set({
        cart: cart || [],
        isLoading: false,
        counter: cart?.lineItems.length || 0,
      });
    } catch (error) {
      console.log(error);
    }
  },
  addItem: async (wixClient) => {},
  removeItem: async (wixClient) => {},
}));
