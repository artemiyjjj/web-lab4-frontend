import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: {
        login: "guest",
        isAuthorized: false,
        data: {
            firstName: "John Doe",
            registrationTime: new Date().getTime(),
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
        setInitialUserState: (state) => {
            state.user = initialState.user;
        }
    }
});

export const userActions = userSlice.actions;