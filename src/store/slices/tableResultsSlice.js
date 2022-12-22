import {createSlice} from "@reduxjs/toolkit";
import {controllerServletApi} from "../slices/api/controllerServlet/controllerServletApi.js";

const initialState = {shots: []}

export const tableResultsSlice = createSlice({
    name: "tableResultsSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            controllerServletApi.endpoints.makeShot.matchFulfilled,
            (state, action) => {
                console.log(action.payload);
                state.shots.push(action.payload);
                console.log(state.shots);

            }
        );
    },
});
