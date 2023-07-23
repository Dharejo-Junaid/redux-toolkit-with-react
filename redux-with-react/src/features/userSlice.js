import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    users: [],
    error: ""
}

export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json());
});

const slice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        });

        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            action.error = payload.message;
        });
    }
});

export default slice.reducer;