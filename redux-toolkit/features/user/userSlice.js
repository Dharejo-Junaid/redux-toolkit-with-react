const createSlice = require("@reduxjs/toolkit").createSlice;
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;

const initialState = {
    loading: false,
    users: [],
    error: ""
}

const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
    return fetch("https://jsonplaceholders.typicode.com/users")
    .then(res => res.json())
    .then(data => data.map(value => value.id));
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
            state.error = action.error.message;
        });
    }
});
module.exports = slice.reducer;
module.exports.fetchUsers = fetchUsers;