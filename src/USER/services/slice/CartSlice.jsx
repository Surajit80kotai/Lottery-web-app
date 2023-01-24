import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../api/Api";


// Defining header
const header = {
    headers: {
        Authorization: `Bearer ${JSON.parse(window.localStorage.getItem("token"))}`
    }
};


// Cart post request handle
const ADD_CART = "/auth/add-cart"
export const addCart = createAsyncThunk("/auth/add-cart", async (cartData) => {
    // console.log(cartData);
    try {
        const res = await API.post(ADD_CART, cartData, header)
        return res?.data
    } catch (err) {
        console.log(err)
    }
})


// Cart get request handle
const GET_CART = "auth/cart"
const id = (JSON.parse(window.localStorage.getItem("user")))?.user_id
export const getCart = createAsyncThunk("/auth/cart", async () => {
    try {
        const res = await API.get(`${GET_CART}/${id}`, header)
        return res?.data
    } catch (err) {
        // console.log(err)
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
            // const newCart = JSON.parse(window.localStorage.getItem("cart_data"))
            // state.cart_data = newCart.filter((item) => item._id !== payload)
            // window.localStorage.setItem("cart_data", JSON.stringify(state.cart_data))
            state.cart_data = state.cart_data.filter((item) => item._id !== payload)
        },
    },
    extraReducers: (builder) => {
        // Post request states for cart system
        builder.addCase(addCart.pending, (state) => {
            state.status = "Loading"
        })
        builder.addCase(addCart.fulfilled, (state, { payload }) => {
            state.status = "Success"
            state.cart_data = payload
        })
        builder.addCase(addCart.rejected, (state) => {
            state.status = "Failed"
        })


        // Get request states for cart system
        builder.addCase(getCart.pending, (state) => {
            state.status = "Loading"
        })
        builder.addCase(getCart.fulfilled, (state, { payload }) => {
            state.status = "Success"
            state.cart_data = payload
            // window.localStorage.setItem("cart_data", JSON.stringify(payload))
        })
        builder.addCase(getCart.rejected, (state) => {
            state.status = "Failed"
        })
    }
})


export const { removeItem, } = CartSlice.actions
export default CartSlice.reducer