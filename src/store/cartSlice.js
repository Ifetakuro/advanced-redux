import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartIsOpen: false,
  cartItems: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const calculateTotalPrice = (items) => {
  const totalPrice = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return totalPrice;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    
    toggleCart: (state) => {
      state.cartIsOpen = !state.cartIsOpen;
    },

    addToCart: (state, action) => {
      const itemInCart = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cartItems = [action.payload, ...state.cartItems];
      }

      state.totalPrice = calculateTotalPrice(state.cartItems);
      state.totalQuantity += 1;
    },

    removeFromCart: (state, action) => {
      const item = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload
      );

      if (item.quantity > 1) {
        item.quantity--;
      } else {
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload
        );
      }

      state.totalPrice = calculateTotalPrice(state.cartItems);
      state.totalQuantity -= 1;
    },
  },
});

export const { toggleCart, addToCart, removeFromCart, calculateTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
