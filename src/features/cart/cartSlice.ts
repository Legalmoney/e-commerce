import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../types/product";

export interface CartItem {
  product: Product;
  quantity: number;
  price: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ product: Product; price: number }>
    ) => {
      const { product, price } = action.payload;

      const existingItem = state.items.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
        return;
      }

      state.items.push({
        product,
        quantity: 1,
        price,
      });
    },

    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(
        (item) => item.product.id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(
        (item) => item.product.id === action.payload
      );

      if (!item) return;

      if (item.quantity === 1) {
        state.items = state.items.filter(
          (cartItem) => cartItem.product.id !== action.payload
        );
        return;
      }

      item.quantity -= 1;
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload
      );
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;