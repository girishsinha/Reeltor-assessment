import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: true, // Default mode is light
};

const modeSlice = createSlice({
    name: "mode",
    initialState,
    reducers: {
        toggleMode: (state) => {
            state.mode = state.mode === true ? false : true;
        },
    },
});

export const { toggleMode } = modeSlice.actions;
export default modeSlice.reducer;
