import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../api/Api";

// Cart post request handle
const ADD_CART = "/auth/add-cart"
export const fetchCart = createAsyncThunk("/auth/add-cart", async ({ userId, productId, quantity }) => {
    try {
        await API.post(ADD_CART, { userId, productId, quantity })
    } catch (err) {
        console.log(err)
    }
})

export const CartSlice = createSlice({
    name: "cartslice",
    initialState: {
        cart_data: [],
        status: "",
        sub_total: 0,
        total: 0
    },
    reducers: {
        // Remove Item
        removeItem(state, { payload }) {
            const newCart = JSON.parse(window.localStorage.getItem("cart_data"))
            state.cart_data = newCart.filter((item) => item._id !== payload._id)
            window.localStorage.setItem("cart_data", JSON.stringify(state.cart_data))
        },
    },
    extraReducers: (builder) => {
        // Post request states for cart system
        builder.addCase(fetchCart.pending, (state) => {
            state.status = "Loading"
        })
        builder.addCase(fetchCart.fulfilled, (state, { payload }) => {
            state.status = "Success"
            state.cart_data = payload
            console.log("Cart slice", payload);
        })
        builder.addCase(fetchCart.rejected, (state) => {
            state.status = "Failed"
        })
    }
})


export const { removeItem, } = CartSlice.actions
export default CartSlice.reducer