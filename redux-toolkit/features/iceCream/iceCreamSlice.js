const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
    iceCreams: 20
}

const reducers = {
    buyIceCream: (state) => {
        state.iceCreams--;
    },
    restockIceCream: (state, action) => {
        state.iceCreams += action.payload;
    }
}

const slice = createSlice({
    name: "cake",
    initialState,
    reducers
});

module.exports = slice.reducer;
module.exports.iceCreamActions = slice.actions;