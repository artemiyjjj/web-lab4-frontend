import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "src/store/slices/userSlice.js";
import {tableResultsSlice} from "./slices/tableResultsSlice.js";
import {inputFormSlice} from "./slices/inputFormSlice.js";
import {controllerServletApi} from "./slices/api/controllerServlet/controllerServletApi.js";

const store = configureStore({
    reducer: {
        inputFormSlice: inputFormSlice.reducer,
        tableResultsSlice: tableResultsSlice.reducer,
        userSlice: userSlice.reducer,
        [controllerServletApi.reducerPath]: controllerServletApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(controllerServletApi.middleware)
})
export default store;