import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cartslice",
    initialState: {
        cart_data: [],
        sub_total: 0,
        total: 0
    },
    reducers: {
        // Add item
        addItem(state, { payload }) {
            const itemIndex = state.cart_data.findIndex(item => item._id === payload._id)
            if (itemIndex >= 0) {
                alert("Item is already added to the cart")
            } else {
                state.cart_data.push(payload)
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
    }
})


export const { addItem, removeItem, incItem, decItem, totalPrice, emptyCart } = CartSlice.actions
export default CartSlice.reducer