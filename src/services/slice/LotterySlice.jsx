import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { API } from "../api/Api"


// fetching all lottery data
const GET_TICKETS = "/ticket/get-tickets"
export const fetchLottery = createAsyncThunk("ticket/get-tickets", async () => {
    try {
        const response = await API.get(GET_TICKETS)
        // console.log(response.data)
        return response.data
    } catch (err) {
        console.log(err);
    }
})


// initialize initialState
const initialState = {
    fetch_lott_data: [],
    fetch_lott_status: ""
}

// Creating Slice
export const LotterySlice = createSlice({
    name: "lotteryslice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // for fetchLottery
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
    }
})

export default LotterySlice.reducer