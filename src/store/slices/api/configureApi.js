import {fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baseUrl = "/controllerServlet"

export const baseQuery = fetchBaseQuery({
    baseUrl,
})