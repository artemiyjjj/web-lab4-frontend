import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: {
        login: "guest",
        isAuthorized: false,
        data: {
            name: "John Doe",
            registrationTime: 0,
            shotsMade: 0,
        }
    }
}

export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setShotsMade: (state, action) => {
            state.user.data.shotsMade = action.payload
        },
    }
});

export const userActions = userSlice.actions;