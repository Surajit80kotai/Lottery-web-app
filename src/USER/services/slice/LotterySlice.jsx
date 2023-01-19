import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { API } from "../api/Api"

// fetching all category data
const GET_CATEGORY = "/admin/get-category"
export const fetchCategory = createAsyncThunk("/admin/get-category", async () => {
    try {
        const response = await API.get(GET_CATEGORY)
        // console.log(response?.data)
        return response?.data
    } catch (err) {
        console.log(err);
    }
})

// fetching all lottery data
const GET_TICKETS = "/ticket/get-tickets"
export const fetchLottery = createAsyncThunk("ticket/get-tickets", async () => {
    try {
        const response = await API.get(GET_TICKETS)
        // console.log(response?.data)
        return response?.data
    } catch (err) {
        console.log(err);
    }
})


// initialize initialState
const initialState = {
    fetch_lott_data: [],
    fetch_lott_status: "",
    category_data: [],
    category_status: ""
}

// Creating Slice
export const LotterySlice = createSlice({
    name: "lotteryslice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // states for fetchLottery
        builder.addCase(fetchLottery.pending, (state) => {
            state.fetch_lott_status = "Loading"
        })
        builder.addCase(fetchLottery.fulfilled, (state, { payload }) => {
            state.fetch_lott_status = "Success"
            state.fetch_lott_data = payload
            window.localStorage.setItem("data", JSON.stringify(payload))
        })
        builder.addCase(fetchLottery.rejected, (state) => {
            state.fetch_lott_status = "Failed"
        })


        // states for fetchCategory
        builder.addCase(fetchCategory.pending, (state) => {
            state.category_status = "Loading"
        })
        builder.addCase(fetchCategory.fulfilled, (state, { payload }) => {
            state.category_status = "Success"
            state.category_data = payload
            window.localStorage.setItem("catData", JSON.stringify(payload))
        })
        builder.addCase(fetchCategory.rejected, (state) => {
            state.category_status = "Failed"
        })
    }
})

export default LotterySlice.reducer