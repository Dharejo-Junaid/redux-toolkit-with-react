const store = require("./app/store");
const { cakeActions } = require("./features/cake/cakeSlice");
const { iceCreamActions } = require("./features/iceCream/iceCreamSlice");
const { fetchUsers } = require("./features/user/userSlice");

console.log("Initial state = ", store.getState());
store.subscribe(() => console.log(store.getState()));
// store.dispatch(cakeActions.buyCake());
// store.dispatch(iceCreamActions.buyIceCream());
// store.dispatch(iceCreamActions.restockIceCream(12));
store.dispatch(fetchUsers());