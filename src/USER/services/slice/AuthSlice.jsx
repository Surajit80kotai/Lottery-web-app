import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FORGETPASSWORD, LOGIN, SIGNUP } from "../api/Api";


//AsyncThunk For SignUp 
export const fetchSignUp = createAsyncThunk(
    "signup",
    async ({ formValues, navigate, toast }, { rejectWithValue }) => {

        try {
            const res = await SIGNUP(formValues)
            toast.success('Registered Successfully. Please login to continue')
            navigate('/login')
            return res?.data
        } catch (err) {
            // console.log("Sign Slice", rejectWithValue(err.response.data.errors));
            return rejectWithValue(err.response.data.errors)
        }

    })


//AsyncThunk For Login 
export const fetchLogin = createAsyncThunk(
    "login", async ({ formValues, navigate, toast }, { rejectWithValue }) => {
        try {
            const result = await LOGIN(formValues)
            window.localStorage.setItem("token", JSON.stringify(result?.data?.token))
            window.localStorage.setItem("user", JSON.stringify(result?.data?.user_details))
            navigate('/')
            // react toast message
            toast.success('Loged In Successfully')
            return result?.data
        } catch (err) {
            // console.log(rejectWithValue(err.response.data));
            return rejectWithValue(err.response.data)
        }

    })


//AsyncThunk For ForgetPassword 
export const fetchForgetPass = createAsyncThunk(
    "forget", async ({ formValues }, { rejectWithValue }) => {
        try {
            const res = await FORGETPASSWORD(formValues)
            return res?.data
        } catch (err) {
            // console.log(rejectWithValue(err.response.data));
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
    signupErr: {}
}

// Creating Slice
export const AuthSlice = createSlice({
    name: "authslice",
    initialState,
    reducers: {
        // Logout reducer
        doLogOut: (state) => {
            window.localStorage.removeItem("token")
            window.localStorage.removeItem("user")
            state.user = null
        }
    },
    extraReducers: (builder) => {
        //States for Signup
        builder.addCase(fetchSignUp.pending, (state) => {
            state.msg = "Pending"
        })
        builder.addCase(fetchSignUp.fulfilled, (state, { payload }) => {
            state.msg = "Success"
            state.user = payload
        })
        builder.addCase(fetchSignUp.rejected, (state, { payload }) => {
            state.msg = "Failed"
            state.signupErr = payload
        })


        //States for Login
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


        //States for ForgetPass
        builder.addCase(fetchForgetPass.pending, (state) => {
            state.msg = "Loading"
        })
        builder.addCase(fetchForgetPass.fulfilled, (state, { payload }) => {
            state.msg = "Success"
            state.user = payload
        })
        builder.addCase(fetchForgetPass.rejected, (state, { payload }) => {
            state.msg = "Failed"
            state.error = payload
        })
    }
})

export const { doLogOut } = AuthSlice.actions
export default AuthSlice.reducer