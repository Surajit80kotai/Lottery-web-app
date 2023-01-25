import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../api/Api";


// Defining header
const header = {
    headers: {
        Authorization: `Bearer ${JSON.parse(window.localStorage.getItem("token"))}`
    }
};


// AddCart post request handle
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


// DeleteCart post request handle
const DEL_CART = "/auth/cart/delete"
export const delCartItem = createAsyncThunk("/auth/cart/delete", async (c_id) => {
    try {
        const res = await API.get(`${DEL_CART}/${c_id}`, header)
        // console.log("cart_slice after", res.data)
        return res?.data
    } catch (err) {
        console.log(err)
    }
})


// GetCart get request handle
const GET_CART = "auth/cart"
//Getting The ID
const id = (JSON.parse(window.localStorage.getItem("user")))?.user_id
export const getCart = createAsyncThunk("/auth/cart", async () => {
    try {
        const res = await API.get(`${GET_CART}/${id}`, header)
        return res?.data
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
    reducers: {},
    extraReducers: (builder) => {
        // Post request states for Addcart system
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


        // Get request states for Deletecart system
        builder.addCase(delCartItem.pending, (state) => {
            state.status = "Loading"
        })
        builder.addCase(delCartItem.fulfilled, (state, { payload }) => {
            state.status = "Success"
            state.cart_data = payload
        })
        builder.addCase(delCartItem.rejected, (state) => {
            state.status = "Failed"
            console.log(state.status)
        })


        // Get request states for Gatcart system
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


export default CartSlice.reducer