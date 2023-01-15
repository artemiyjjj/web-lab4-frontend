import {fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baseUrl = "/back-1.0-SNAPSHOT/controllerServlet"
// const baseUrl = "http://localhost:3001/"

export const baseQuery = fetchBaseQuery({
    baseUrl,
})