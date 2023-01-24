
import {createApi} from "@reduxjs/toolkit/query/react";
import {baseQuery} from "src/store/slices/api/configureApi.js";

export const authApiSlice = createApi({
    reducerPath: "authApiSlice",
    baseQuery,
    tagTypes: ["Users"],
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => ({
                url: 'tokens/',
                body,
                method: 'POST'
            }),
        }),
        signUp: builder.mutation({
            query: (body) => ({
                url: 'users/',
                body,
                method: "POST"
            })
        })
    }),

})

export const {
    useLoginMutation,
    useSignUpMutation
} = authApiSlice