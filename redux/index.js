const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
const RESTOCK_CAKES = "RESTOCK_CAKES";
const RESTOCK_ICECREAMS = "RESTOCK_ICECREAMS";

const cakeInitialState = {
    cakes: 10
}

const iceCreamInitialState = {
    iceCreams: 20
}

const buyCake = () => {
    return {
        type: BUY_CAKE
    }
}

const buyIceCream = () => {
    return {
        type: BUY_ICECREAM
    }
}

const restockCakes = (qty = 1) => {
    return {
        type: RESTOCK_CAKES,
        quantity: qty
    }
}

const restockIceCreams = (qty = 1) => {
    return {
        type: RESTOCK_ICECREAMS,
        quantity: qty
    }
}

const cakeReducer = (state = cakeInitialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state, cakes: state.cakes - 1
        }

        case RESTOCK_CAKES: return {
            ...state, cakes: state.cakes + action.quantity
        }

        default: return state;
    }
}

const iceCreamReducer = (state = iceCreamInitialState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state, iceCreams: state.iceCreams - 1
        }

        case RESTOCK_ICECREAMS: return {
            ...state, iceCreams: state.iceCreams + action.quantity
        }

        default: return state;
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});

const store = createStore(rootReducer);
console.log("Initial state = ", store.getState());
const unsub = store.subscribe(() => console.log(store.getState()));
store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyIceCream());
// store.dispatch(buyIceCream());
// store.dispatch(buyIceCream());
// store.dispatch(buyIceCream());
// store.dispatch(restockCakes(5));
// store.dispatch(restockIceCreams(5));
unsub();