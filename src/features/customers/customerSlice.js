import { createSlice } from "@reduxjs/toolkit";

const intialState ={
    fullName: "",
    nationalId: "",
    createdAt: ""
   }

   const customerSlice = createSlice({
    name: "customer",
    initialState:intialState,
    reducers: {
        createCustomer:{
            prepare(fullName,nationalId){
                return{
                    payload: {fullName, nationalId, createdAt:new Date().toISOString()}
                }
            },
          reducer(state, action){
            state.fullName = action.payload.fullName;
            state.nationalId = action.payload.nationalId;
            state.createdAt= action.payload.createdAt;
          }
        },
        updateName(state, action){
            state.fullName = action.payload;
        }
    }
   })
   export const {createCustomer, updateName} = customerSlice.actions
   export default customerSlice.reducer
   
   