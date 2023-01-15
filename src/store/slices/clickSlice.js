import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    shots: []
}

export const inputFormSlice = createSlice({
    name: "clickSlice",
    initialState,
    reducers: {
        addClick: (state, action) => {
            //todo click storage
        }
    }
})


export const inputFormActions = inputFormSlice.actions;