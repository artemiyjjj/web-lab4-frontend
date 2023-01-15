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
                state.shots.push(action.payload);
            }
        )
            // .addMatcher(
            //     controllerServletApi.endpoints.getTableData.matchFulfilled,
            //     (state, action) => {
            //         action.payload.forEach((shot) => state.shots.push(shot));
            //     });
    },
});
