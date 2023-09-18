const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = redux.createStore(counterReducer); //Creating the central store using createStore method
// console.log(store.getState());

const counterSubscriber = () => {
  const latestState = store.getState(); //This method gives the latest state snapshot once it is updated.
  console.log("latestState", latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" }); //Without dispatch the subscribe wont be triggered.
store.dispatch({ type: "decrement" });
