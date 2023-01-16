import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../slice/AuthSlice";
import CartSlice from "../slice/CartSlice";
import CountryStateSlice from "../slice/CountryStateSlice";
import LotterySlice from "../slice/LotterySlice";

export const Store = configureStore({
    reducer: {
        authslice: AuthSlice,
        lotteryslice: LotterySlice,
        countrystateslice: CountryStateSlice,
        cartslice: CartSlice
    }
})