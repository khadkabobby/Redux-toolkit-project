import { createSlice } from "@reduxjs/toolkit";

import { getCartItems } from "./cartApi";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase:(state,action)=>{
      const cartItem=state.cartItems.find((item)=>item.id===action.payload.id);
      cartItem.amount=cartItem.amount+1;
    },
    decrease:(state,action)=>{
      const cartItem=state.cartItems.find((item)=>item.id===action.payload.id);
      cartItem.amount=cartItem.amount-1;
    },
    calculateTotals:(state)=>{
      let amount=0;
      let total=0;
      state.cartItems.forEach((item)=>{
        amount+=item.amount;
        total+=item.amount*item.price;
      })
      state.amount=amount;
      state.total=total;
    }
    
  },
  extraReducers:{
    [getCartItems.pending]:(state)=>{
      state.isLoading=true;
    },
    [getCartItems.fulfilled]:(state,action)=>{
      state.loading=false;
      state.cartItems=action.payload;
    },
    [getCartItems.rejected]:(state)=>{
      state.isLoading=false;
    }
  }
});

export const { clearCart, removeItem,increase,decrease,calculateTotals} = cartSlice.actions;

export default cartSlice.reducer;
