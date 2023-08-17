import { configureStore } from "@reduxjs/toolkit"
import accountReducer from "../src/features/account/accountSlice"
import customerReducer from "../src/features/customers/customerSlice"
const store = configureStore({
    reducer:{
        account:accountReducer,
        customer:customerReducer
    }
})
export default store;