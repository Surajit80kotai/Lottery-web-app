import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ORDERHISTORY, UPDATEPROFILE, WALLETBALANCE } from "../api/Api";

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


//update profile
export const updateProfile = createAsyncThunk("/auth/update/profile", async ({ formValues, toast }) => {
    try {
        const response = await UPDATEPROFILE(formValues, header)
        toast.success("Profile Updated Successfully")
        window.localStorage.setItem("user", JSON.stringify(response?.data))
        return response?.data
    } catch (err) {
        console.log(err);
    }
})


// order history
export const userOrderHistory = createAsyncThunk("", async () => {
    try {
        const res = await ORDERHISTORY(header)
        return res?.data
    } catch (err) {
        console.log(err)
    }
})


const initialState = {
    balance: [],
    profile_data: [],
    order_history_data: [],
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

        // states for updateProfile
        builder.addCase(updateProfile.pending, (state) => {
            state.balance_status = "Loading"
        })
        builder.addCase(updateProfile.fulfilled, (state, { payload }) => {
            state.balance_status = "Success"
            state.profile_data = payload
        })
        builder.addCase(updateProfile.rejected, (state) => {
            state.balance_status = "Failed"
        })

        // states for orderHistory
        builder.addCase(userOrderHistory.pending, (state) => {
            state.balance_status = "Loading"
        })
        builder.addCase(userOrderHistory.fulfilled, (state, { payload }) => {
            state.balance_status = "Success"
            state.order_history_data = payload
        })
        builder.addCase(userOrderHistory.rejected, (state) => {
            state.balance_status = "Failed"
        })
    }
})

export default UserSlice.reducer