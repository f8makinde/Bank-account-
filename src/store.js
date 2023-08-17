import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import accountReducer from "../src/features/account/accountSlice"
import customerReducer from "../src/features/customers/customerSlice"
const rootReducer = combineReducers({
    account:accountReducer,
    customer:customerReducer
})
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;