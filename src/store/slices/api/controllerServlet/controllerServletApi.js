import {createApi} from "@reduxjs/toolkit/dist/query/react/index.js";
import {baseQuery} from "../configureApi.js";

const tagTypes = ["Table"]

export const controllerServletApi = createApi({
    reducerPath: "controllerServletApi",
    baseQuery,
    tagTypes: tagTypes,
    endpoints: (builder) => ({
        // getTableData: builder.query({
        //     query: () => "",
        //     providesTags: (result) => result
        //         ? [
        //             ...result.map(({id}) => ({type: "Table", id: "LIST"})),
        //             {type: "Table", id: "LIST"},
        //         ] :
        //         [{type: "Table", id: "LIST"}],
        // }),
        makeShot: builder.mutation({
            query: ({x, y, r}) => ({
                url: "",
                method: "POST",
                body: {x, y, r},
                // invalidatesTags: {type: "Table", id: "LIST"}
            })
        })
    })

})

export const {
    // useGetTableDataQuery,
    useMakeShotMutation
} = controllerServletApi

