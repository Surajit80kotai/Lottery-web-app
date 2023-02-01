import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { WALLETBALANCE } from "../api/Api";

// Defining header
const header = {
    headers: {
        Authorization: `Bearer ${JSON.parse(window.localStorage.getItem("token"))}`
    }
};

//get user balance
export const getBalance = createAsyncThunk("/auth/account/wallet/balance", async () => {
    try {
        const response = await WALLETBALANCE(header)
        // console.log(response?.data)
        return response?.data
    } catch (err) {
        console.log(err);
    }
})


const initialState = {
    balance: [],
    balance_status: ""
}

// Creating Slice
export const UserSlice = createSlice({
    name: "userslice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // states for fetchLottery
        builder.addCase(getBalance.pending, (state) => {
            state.balance_status = "Loading"
        })
        builder.addCase(getBalance.fulfilled, (state, { payload }) => {
            state.balance_status = "Success"
            state.balance = payload
        })
        builder.addCase(getBalance.rejected, (state) => {
            state.balance_status = "Failed"
        })
    }
})

export default UserSlice.reducer