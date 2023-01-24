
import {createApi} from "@reduxjs/toolkit/query/react";
import {baseQuery} from "../configureApi.js";

const tagTypes = ["Table"]

export const controllerServletApi = createApi({
    reducerPath: "controllerServletApi",
    baseQuery,
    tagTypes: tagTypes,
    endpoints: (builder) => ({
        // getTableData: builder.query({
        //     query: () => "hits/",
        //     providesTags: ["Table"]
        // }),
        makeShot: builder.mutation({
            query: ({x, y, r}) => ({
                url: "hits/",
                method: "POST",
                body: {x, y, r},
                // invalidatesTags: ["Table"]
            })
        })
    })

})

export const {
    // useGetTableDataQuery,
    useMakeShotMutation
} = controllerServletApi

