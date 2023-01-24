import {configureStore} from "@reduxjs/toolkit";
import {authApiSlice} from "src/store/slices/api/auth/authApiSlice.js";
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
        [authApiSlice.reducerPath]: authApiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(controllerServletApi.middleware)
            .concat(authApiSlice.middleware)
})
export default store;