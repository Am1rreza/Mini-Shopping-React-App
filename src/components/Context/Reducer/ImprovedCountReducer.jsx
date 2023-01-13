import { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + action.value;

    case "decrement":
      return state - action.value;

    case "reset":
      return initialState;

    default:
      return state;
  }
};

const ImprovedCountReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>count 1 : {count}</h2>
      <div>
        <button onClick={() => dispatch({ type: "increment", value: 1 })}>
          increment
        </button>
        <button onClick={() => dispatch({ type: "increment", value: 5 })}>
          add five
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      </div>
      <h2>count 2 : {count2}</h2>
      <div>
        <button onClick={() => dispatch2({ type: "increment", value: 1 })}>
          increment
        </button>
        <button onClick={() => dispatch2({ type: "increment", value: 5 })}>
          add five
        </button>
        <button onClick={() => dispatch2({ type: "decrement", value: 1 })}>
          decrement
        </button>
        <button onClick={() => dispatch2({ type: "reset" })}>reset</button>
      </div>
    </div>
  );
};

export default ImprovedCountReducer;
