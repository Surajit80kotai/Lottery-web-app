import axios from "axios";


// base url
const Api = axios.create({baseURL: "http://192.168.1.39:3303/api"})

// raw url
export const BaseUrl = "http://192.168.1.39:3303/"

// login api function
export const LOGIN = (loginData)=> Api.post('/auth/login', loginData)

// signup api function
export const SIGNUP = (signupData)=> Api.post('/auth/signup', signupData)

// country & state api function
export const COUNTRY = ()=> Api.get('/countries')
export const STATE =(id)=> Api.get("/state/"+id)

// get ticket api Function
export const TICKET = ()=> Api.get('/ticket/get-tickets')

// get Category api function
export const CATEGORY = ()=> Api.get('/admin/get-category')

// post Add to Cart
export const ADDTOCART = (cartData, header)=> Api.post('/auth/add-cart', cartData, header)

// fetch cart item of user
export const FETCHCART = (id, header)=> Api.get("/auth/cart/"+id, header)

// delete cart item
export const DELCART = (id, header)=> Api.get("/auth/cart/delete/"+id, header)