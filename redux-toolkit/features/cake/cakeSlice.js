const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
    cakes: 10
}

const reducers = {
    buyCake: (state) => {
        state.cakes--;
    },
    restoreCakes: (state, action) => {
        state.cakes += action.payload;
    }
}

const slice = createSlice({
    name: "cake",
    initialState,
    reducers
});

module.exports = slice.reducer;
module.exports.cakeActions = slice.actions;