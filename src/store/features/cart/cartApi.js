import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://course-api.com/react-useReducer-cart-project";

export const getCartItems = createAsyncThunk("cart/getCartItems", async () => {
  try {
    const res = await axios.get(url);
    return res?.data;
  } catch (error) {
    console.log(error);
  }
});
