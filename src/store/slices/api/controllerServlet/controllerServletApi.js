import {createApi} from "@reduxjs/toolkit/dist/query/react/index.js";
import {baseQuery} from "../configureApi.js";

const tagTypes = ["Table"]

export const controllerServletApi = createApi({
    reducerPath: "controllerServletApi",
    baseQuery,
    tagTypes: tagTypes,
    endpoints: (builder) => ({
        getTableData: builder.query({
            query: () => "",
            providesTags: ["Table"]
        }),
        makeShot: builder.mutation({
            query: ({x, y, r}) => ({
                url: "",
                method: "POST",
                body: {x, y, r},
                invalidatesTags: ["Table"]
            })
        })
    })

})

export const {
    // useGetTableDataQuery,
    useMakeShotMutation
} = controllerServletApi

