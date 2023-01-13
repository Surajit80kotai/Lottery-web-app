import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../api/Api";


//AsyncThunk For SignUp 
const SIGN_UP = "/auth/signup"
export const fetchSignUp = createAsyncThunk(
    "signup",
    async ({ formValues, navigate }, { rejectWithValue }) => {

        try {
            await API.post(SIGN_UP, formValues)
            navigate('/login')
        } catch (err) {
            return rejectWithValue(err.response.data.errors)
        }

    })


//AsyncThunk For Login 
const LOG_IN = "/auth/login"
export const fetchLogin = createAsyncThunk(
    "login", async ({ formValues, navigate }, { rejectWithValue }) => {
        try {
            const result = await API.post(LOG_IN, formValues)
            window.localStorage.setItem("token", JSON.stringify(result?.data?.token))
            window.localStorage.setItem("user", JSON.stringify(result?.data?.user_details))
            navigate('/')
        } catch (err) {
            return rejectWithValue(err.response.data)
        }

    })


// defining initialState
const initialState = {
    user: null,
    token: "",
    msg: "",
    error: null,
    login: {
        error_user: "",
        error_password: ""
    },
    signupErr: []
}

// Creating Slice
export const AuthSlice = createSlice({
    name: "authslice",
    initialState,
    reducers: {
        doLogOut: (state) => {
            window.localStorage.removeItem("token")
            window.localStorage.removeItem("user")
            state.user = null
        }
    },
    extraReducers: (builder) => {
        // for Signup
        builder.addCase(fetchSignUp.pending, (state) => {
            state.msg = "Pending"
        })
        builder.addCase(fetchSignUp.fulfilled, (state, { payload }) => {
            state.msg = "Success"
            state.user = payload
        })
        builder.addCase(fetchSignUp.rejected, (state, { payload }) => {
            state.msg = "Failed"
            state.signupErr.push(payload)
        })


        // for Login
        builder.addCase(fetchLogin.pending, (state) => {
            state.msg = "Loading"
        })
        builder.addCase(fetchLogin.fulfilled, (state, { payload }) => {
            state.msg = "Success"
            state.user = payload
            window.localStorage.getItem("token")
        })
        builder.addCase(fetchLogin.rejected, (state, { payload }) => {
            state.msg = "Failed"
            if (payload.data.type === "user") {
                state.login.error_user = payload.data
                state.login.error_password = ""
            } else if (payload.data.type === "password") {
                state.login.error_password = payload.data
                state.login.error_user = ""
            }
        })
    }
})

export const { doLogOut } = AuthSlice.actions
export default AuthSlice.reducer