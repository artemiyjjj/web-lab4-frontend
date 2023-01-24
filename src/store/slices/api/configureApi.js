import {fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {storageConsts} from "src/utils/const/consts.js";

// const baseUrl = "/back-1.0-SNAPSHOT/controllerServlet"
const baseUrl = "http://localhost:8080/api/"
// const baseUrl = "http://localhost:3001/"

export const baseQuery = fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
        const token = localStorage.getItem(storageConsts.jwt);
        if (token) {
            headers.set('Authorization', `Bearer_${token}`);
        }
        return headers;
    },
    mode:"cors",
    // credentials: 'include',
})