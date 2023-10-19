import React, { useState } from "react";
import useCounter from "./hooks/useCounter";
import { Link } from 'react-router-dom';

function Counter() {
  const { count, increment, decrement, reset, setValue } = useCounter(0);

  const [customValue, setCustomValue] = useState(''); // Initialize as an empty string

  const handleSetValue = () => {
    setValue(customValue ? Number(customValue) : 0); // Ensure it's a number or fallback to 0
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>

      <input
        type="number"
        onChange={(e) => setCustomValue(e.target.value)} // Update the state with the input value
      />
      <button onClick={handleSetValue}>Set Value</button>
      <Link to="/">Back Home</Link>
    </div>
  );
}

export default Counter;