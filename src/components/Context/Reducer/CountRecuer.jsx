import { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };

    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };

    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };

    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };

    case "reset":
      return initialState;

    default:
      return state;
  }
};

const CountReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>count 1 : {count.firstCounter}</h2>
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
      <h2>count 2 : {count.secondCounter}</h2>
      <div>
      <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
        increment2
      </button>
      <button onClick={() => dispatch({ type: "increment2", value: 5 })}>
        add five 2
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
        decrement2
      </button>
      </div>
    </div>
  );
};

export default CountReducer;
