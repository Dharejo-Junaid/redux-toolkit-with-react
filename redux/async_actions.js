const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;

const initialState = {
    loading: false,
    users: [],
    error: ""
}

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_REQUEST_SUCCESS = "FETCH_USERS_REQUEST_SUCCESS";
const FETCH_USERS_REQUEST_FAIL = "FETCH_USERS_REQUEST_FAIL";

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersRequestSuccess = (users) => {
    return {
        type: FETCH_USERS_REQUEST_SUCCESS,
        payload: users
    }
}

const fetchUsersRequestFail = (error) => {
    return {
        type: FETCH_USERS_REQUEST_FAIL,
        payload: error
    }
}

const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest());
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => {
            const userIds = data.map(value => value.id);
            dispatch(fetchUsersRequestSuccess(userIds));
            unsub();
        })
        .catch(error => {
            dispatch(fetchUsersRequestFail(error.message));
            unsub();
        });
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST: return {
            ...state, loading: true,
        }

        case FETCH_USERS_REQUEST_SUCCESS: 
        return {
            ...state, loading: false, users: action.payload
        }

        case FETCH_USERS_REQUEST_FAIL: return {
            ...state, loading: false, error: action.payload
        }

        default: return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
console.log("Initial state = ", store.getState());
const unsub = store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchUsers());