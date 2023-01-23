import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../api/Api";

// Cart post request handle
const ADD_CART = "/auth/add-cart"
export const fetchCart = createAsyncThunk("/auth/add-cart", async ({ userId, productId, amount }) => {
    try {
        await API.post(ADD_CART, { userId, productId, amount })
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
        total: 0,
        tota_amount: 0
    },
    reducers: {
        // Add item
        addItem(state, { payload }) {
            console.log(payload);
            const itemIndex = state.cart_data.findIndex(item => item._id === payload._id)
            if (itemIndex >= 0) {
                state.cart_data[itemIndex].cartQuantity += 1
                // alert("Item is already added to the cart")
            } else {
                const tempProduct = { ...payload, cartQuantity: 1 }
                state.cart_data.push(tempProduct)
                window.localStorage.setItem("cart_data", JSON.stringify(state.cart_data))
            }
        },


        // Remove Item
        removeItem(state, { payload }) {
            const newCart = JSON.parse(window.localStorage.getItem("cart_data"))
            state.cart_data = newCart.filter((item) => item._id !== payload._id)
            window.localStorage.setItem("cart_data", JSON.stringify(state.cart_data))
        },


        // Incrimet of an item
        incItem(state, { payload }) {
            const newData = state.cart_data.map((item) => {
                if (item._id === payload) {
                    let newQuantity = item.ticket_quantity + 1
                    return {
                        ...item,
                        ticket_quantity: newQuantity
                    }
                }
                return item
            })
            return {
                ...state,
                cart_data: newData
            }
        },


        // Decriment of an item
        decItem(state, { payload }) {
            const newData = state.cart_data.map((item) => {
                if (item._id === payload) {
                    let newQuantity = item.ticket_quantity - 1
                    if (newQuantity < 1) {
                        newQuantity = 1
                    }
                    return {
                        ...item,
                        ticket_quantity: newQuantity
                    }
                }
                return item
            })
            return {
                ...state,
                cart_data: newData
            }
        },


        //Total Price of items
        totalPrice(state) {
            let amount = 0
            state.cart_data.map((item) => {
                amount += (Number(item.ticket_quantity) * (Number(item.ticket_price - (item.ticket_price * item.discount_percentage) / 100)))
                return amount
            })
            return {
                ...state,
                sub_total: amount,
                total: amount
            }
        },


        // Empty cart
        emptyCart(state) {
            return {
                ...state,
                cart_data: []
            }
        }
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


export const { addItem, removeItem, incItem, decItem, totalPrice, emptyCart } = CartSlice.actions
export default CartSlice.reducer