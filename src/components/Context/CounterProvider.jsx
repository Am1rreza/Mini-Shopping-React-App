import react, { useContext, useState } from "react";

// Create context
const CounterContext = react.createContext(); // staet
const CounterContextDispatcher = react.createContext(); // setState

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={count}>
      <CounterContextDispatcher.Provider value={setCount}>
        {children}
      </CounterContextDispatcher.Provider>
    </CounterContext.Provider>
  );
};

export default CounterProvider;

export const useCount = () => useContext(CounterContext);

export const useCountActions = () => {
  const setCount = useContext(CounterContextDispatcher);
  // actions
  const addOne = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const addFive = () => {
    setCount((prevCount) => prevCount + 5);
  };

  return { addOne, addFive };
};
