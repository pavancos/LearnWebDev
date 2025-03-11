import React, { createContext, useContext, useState } from "react";

const CounterContext = createContext({ count: 0, increment: () => {} });

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  return <CounterContext.Provider value={{ count, increment }}>{children}</CounterContext.Provider>;
};

const Counter = () => {
  const { count, increment } = useContext(CounterContext);
  console.log("Counter re-rendered!");
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default function App() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}
