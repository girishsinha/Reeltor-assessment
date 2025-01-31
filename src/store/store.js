import { configureStore } from "@reduxjs/toolkit";
import modeSlice from "../slices/Mode";

export const store = configureStore({
    reducer: {
        mode: modeSlice,
    },
});

export default store;