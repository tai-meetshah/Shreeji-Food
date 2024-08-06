import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
      //   return { items: [] };
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

// * Vanilla (Older) Redux - DON'T MUTATE STATE, returning was mandotory
/*
      const newState = [ ...state ];
      newState.items.push(action.payload)
      return newState
      */
// * Redux Toolkit - We should have to mutate the state, returning is not mandotory
// * RTK uses Immer.js behind the scenes
