import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ADDTOCART, DELCART, FETCHCART, UPDATECART } from "../api/Api";


// Defining header
const header = {
    headers: {
        Authorization: `Bearer ${JSON.parse(window.localStorage.getItem("token"))}`
    }
};


// AddCart post request handle
export const addCart = createAsyncThunk("/auth/add-cart", async (cartData) => {
    // console.log(cartData);
    try {
        const res = await ADDTOCART(cartData, header)
        return res?.data
    } catch (err) {
        console.log(err)
    }
})


// DeleteCart post request handle
export const delCartItem = createAsyncThunk("/auth/cart/delete", async (c_id) => {
    try {
        const res = await DELCART(c_id, header)
        return res?.data
    } catch (err) {
        console.log(err)
    }
})


// GetCart get request handle
export const getCart = createAsyncThunk("/auth/cart", async (_id) => {
    try {
        const res = await FETCHCART(_id, header)
        return res?.data
    } catch (err) {
        console.log("Cart data is not fetched", err)
    }
})


// updateCart get request handle
export const updateCart = createAsyncThunk("/auth/cart/qt_update", async (id, qty) => {
    try {
        const res = await UPDATECART(id, qty, header)
        console.log(res)
        return res?.data
    } catch (err) {
        console.log("Quantity not updated", err)
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
        emptyCart(state) {
            state.cart_data = []
        }
    },
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
        })
        builder.addCase(getCart.rejected, (state) => {
            state.status = "Failed"
        })


        // Get request states for Updatecart system
        builder.addCase(updateCart.pending, (state) => {
            state.status = "Loading"
        })
        builder.addCase(updateCart.fulfilled, (state, { payload }) => {
            state.status = "Success"
            state.cart_data = payload
        })
        builder.addCase(updateCart.rejected, (state) => {
            state.status = "Failed"
        })
    }
})

export const { emptyCart } = CartSlice.actions
export default CartSlice.reducer