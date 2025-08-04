import { Cart } from "@/app/utills/types";
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState: Cart[] = [];

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // add to cart functionallity
    addToCart: (state, action) => {
      const uuid = Math.floor(1000 + Math.random() * 9000);
      const newObj = { ...action.payload, uuid };
      state.push(newObj);
    },
    // clear cart functionallity
    clearCart() {
      return [];
    },
    // remove from cart functionallity
    delItem(state, { payload }) {
      return state.filter((val) => val.uuid !== payload);
    },
    // addition of items
    addCart(state, action) {
      const obj = state.find(
        (val) =>
          val.id === action.payload.id &&
          val.color === action.payload.color &&
          val.size === action.payload.size
      );
      if (obj) {
        ++obj.qty;
        const newState = state.filter((val) => val.id !== obj.id);
        state = [...newState, obj];
        return;
      }
    },
    // subtraction of items
    subtractCart(state, action) {
      const obj = state.find(
        (val) =>
          val.id === action.payload.id &&
          val.color === action.payload.color &&
          val.size === action.payload.size
      );
      if (obj !== undefined) {
        if (obj.qty <= 1) {
          return state.filter((val) => val.uuid !== obj.uuid);
        }
        --obj.qty;
        const newState = state.filter((val) => val.uuid == obj?.id);
        state = [...newState, obj];
      }
      return;
    },
  },
});

export const { addToCart, delItem, addCart, subtractCart, clearCart  } = cartSlice.actions;

export default cartSlice.reducer;
