import { combineReducers, createStore } from "redux"
const intialStateAccount = {
    balance: 0,
    loan:0,
    loanPurpose: ""
}
const intialStateCustomers ={
 fullName: "",
 nationalId: "",
 createdAt: ""
}
function accountReducer(state = intialStateAccount, action){
    switch(action.type){
        case "account/deposit":
            return{
                ...state, balance:state.balance + action.payload
            };
            case "account/withdraw":
                return{
                    ...state, balance:state.balance - action.payload
                }
                case "account/request":
                    if(state.loan > 0) return state;

                    return{
                        ...state, loan:action.payload.amount, balance:state.balance + action.payload.amount, loanPurpose:action.payload.purpose
                    }
                    case "account/payLoan":
                        return{
                            ...state, loan:0, loanPurpose: "", balance:state.balance - state.loan 
                        }
            default:
                return state;
    }
}
function customerReducer(state = intialStateCustomers, action){
    switch(action.type){
        case"customer/createCustomer":
        return{
          ...state,fullName:action.payload.fullName, nationalId:action.payload.nationalId, createdAt:action.payload.createdAt
        };
        case "account/updateName":
            return{
                ...state, fullName:action.payload
            }
        default:
            return state;
    }
}
const rootReducer = combineReducers({
    account:accountReducer,
    customer:customerReducer
})
const store = createStore(rootReducer)

function deposit(amount){
 return {type: "account/deposit", payload: amount}
}

function withdraw(amount){
    return {type: "account/withdraw", payload: 200}
}
function requestLoan(amount, purpose){
    return {type: "account/request", payload: {amount, purpose}}
}
function payLoan(){
    return {type: "account/payLoan"}
}
store.dispatch(deposit(500))
console.log(store.getState())
 store.dispatch(withdraw(200))
console.log(store.getState())
store.dispatch(requestLoan(1000, "Buy a monitor"))
console.log(store.getState())
store.dispatch(payLoan())
 console.log(store.getState())

 function createCustomer(fullName, nationalId){
  return {type: 'customer/createCustomer', payload: {fullName, nationalId, createdAt: new Date().toISOString()}}
 }
 function updateName(fullName){
    return {type: "account/updateName", payload: fullName}
 }


 store.dispatch(createCustomer("faith", "23456"))
 console.log(store.getState())
 store.dispatch(updateName("faith makinde"))
 console.log(store.getState())