import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 10
}

const reducers = {
    increment: (state) => {
        state.counter++;
    },

    decrement: (state) => {
        state.counter--;
    }
}

const slice = createSlice({
    name: "counter",
    initialState,
    reducers
});

export default slice.reducer;
export const { increment, decrement } = slice.actions;