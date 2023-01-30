import axios from "axios";

export const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL })

// login api function
export const LOGIN = (loginData) => API.post('/auth/login', loginData)

// signup api function
export const SIGNUP = (signupData) => API.post('/auth/signup', signupData)

// forgetpassword api function
export const FORGETPASSWORD = (formValue) => API.post('/auth/forget', formValue)

// country & state api function
export const COUNTRY = () => API.get('/countries')
export const STATE = (id) => API.get('/state/' + id)

// get Category api function
export const CATEGORY = () => API.get('/admin/get-category')

// get ticket api Function
export const TICKET = () => API.get('/ticket/get-tickets')

// post Add to Cart
export const ADDTOCART = (cartData, header) => API.post('/auth/add-cart', cartData, header)

// fetch cart item of user
export const FETCHCART = (id, header) => API.get("/auth/cart/" + id, header)

// delete cart item
export const DELCART = (id, header) => API.get("/auth/cart/delete/" + id, header)

// user balance
export const USERBALANCE = (header) => API.get("/auth/account/wallet/balance", header)