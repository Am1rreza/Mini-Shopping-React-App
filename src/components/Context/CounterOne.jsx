import { useCount, useCountActions } from "./CounterProvider";

const CounterOne = () => {
  const count = useCount();
  const dispatch = useCountActions();

  return (
    <div>
      <h2>Count is {count}</h2>
      <button
        onClick={() => {
          dispatch({ type: "increment", value: 1 });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", value: 1 });
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default CounterOne;
