import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../type";
import toast from "react-hot-toast";

interface InitialState {
  cart: ProductType[];
  userInfo: any;
}

const initialState: InitialState = {
  cart: [],
  userInfo: null,
};

export const shofySlice = createSlice({
  name: "shofy",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state?.cart?.find(
        (item) => item?.id === action.payload?.id
      );
      if (existingProduct) {
        toast.error("Product already available");
      } else {
        state.cart.push(action.payload);
      }
    },
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
  },
});
export const { addToCart, addUser, removeUser } = shofySlice.actions;
export default shofySlice.reducer;
