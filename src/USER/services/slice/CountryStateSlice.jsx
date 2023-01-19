import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { API } from "../api/Api";

// fetchCountry data
const COUNTRIES = "/countries"
export const fetchCountry = createAsyncThunk("/countries", async () => {
    try {
        const result = await API.get(COUNTRIES)
        // console.log(result?.data);
        return result?.data
    } catch (err) {
        console.log(err);
    }
})

// fetchStates data
export const fetchStates = createAsyncThunk("/state", async (id) => {
    try {
        const result = await API.get(`/state/${id}`)
        // console.log(result?.data);
        return result?.data
    } catch (err) {
        console.log(err);
    }
})


const CountryStateSlice = createSlice({
    name: "countrystateslice",
    initialState: {
        countryData: [],
        stateData: [],
        msg: ""
    },
    reducers: {},
    extraReducers: (builder) => {
        // For country fetch
        builder.addCase(fetchCountry.pending, (state) => {
            state.msg = "Loading.."
        })
        builder.addCase(fetchCountry.fulfilled, (state, { payload }) => {
            state.msg = "Success"
            state.countryData = payload
        })
        builder.addCase(fetchCountry.rejected, (state) => {
            state.msg = "Failed"
        })


        //  For state fetch
        builder.addCase(fetchStates.pending, (state) => {
            state.msg = "Loading.."
        })
        builder.addCase(fetchStates.fulfilled, (state, { payload }) => {
            state.msg = "Success"
            state.stateData = payload
        })
        builder.addCase(fetchStates.rejected, (state) => {
            state.msg = "Failed"
        })
    }

})

export default CountryStateSlice.reducer