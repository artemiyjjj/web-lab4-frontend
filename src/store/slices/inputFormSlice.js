import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    x:0,
    y:0,
    r:0
}

export const inputFormSlice = createSlice({
    name: "inputFormSlice",
    initialState,
    reducers:{
        setX:(state, action) =>{
            state.x = action.payload
        },
        setY:(state, action) =>{
            state.y = action.payload
        },
        setR:(state, action) =>{
            state.r = action.payload
        }
    }
})


export const inputFormActions = inputFormSlice.actions;
