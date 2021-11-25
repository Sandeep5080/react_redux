import {createSlice} from "@reduxjs/toolkit";

const initialStateValue = { name: "", age: 0, email: "" };

export const userSlice = createSlice({


    name: "user",
    initialState: {value: {name: "sandeep", age: 22, email: "sandeepredddy@gmail.com"} },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
        logout: (state,action) => {
            state.value = initialStateValue;
        },
    },
});

export const {login, logout } = userSlice.actions;


export default userSlice.reducer;