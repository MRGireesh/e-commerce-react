import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    amount: 0,
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const addProduct = action.payload;
      try {
        const exist = state.cart.find(
          (product) =>
            product.id == addProduct.id &&
            product.size === addProduct.size &&
            product.color === addProduct.color
        );
        if (exist) {
          exist.amount++;
          exist.totalPrice += addProduct.price;
          state.totalAmount++;
          state.totalPrice += addProduct.price;
        } else {
          state.cart.push(addProduct);
          state.totalAmount++;
          state.totalPrice += addProduct.price;
        }
      } catch (error) {
        return error;
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
