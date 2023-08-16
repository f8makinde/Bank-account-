import { combineReducers, createStore } from "redux"
import accountReducer from "../src/features/account/accountSlice"
import customerReducer from "../src/features/customers/customerSlice"
const rootReducer = combineReducers({
    account:accountReducer,
    customer:customerReducer
})
const store = createStore(rootReducer)

export default store;