import { useCount, useCountActions } from "./CounterProvider";

const CounterOne = () => {
  const count = useCount();
  const { addOne, addFive } = useCountActions();

  return (
    <div>
      <h2>Count is {count}</h2>
      <button onClick={addOne}>ADD ONE</button>
      <button onClick={addFive}>ADD FIVE</button>
    </div>
  );
};

export default CounterOne;
