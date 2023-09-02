import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "dark",
    userId: "63701cc1f03239b7f700000e",
    userData: localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null,
}

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light"
        },
        setUserCredentials: (state, action) => {
            state.userData = action.payload;
            localStorage.setItem('userData', JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.userData = null;
            localStorage.removeItem('userData');
        }
    }
})

export const { setMode, setUserCredentials, logout } = globalSlice.actions;
export default globalSlice.reducer;