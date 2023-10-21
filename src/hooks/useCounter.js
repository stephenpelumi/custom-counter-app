import { useState } from "react";

//This is the custom hook for the counter app
function useCounter(initialValue = 0) {
  //These are the functions
  const [count, setCount] = useState(initialValue);

  //Increment
  const increment = () => {
    setCount(count + 1);
  };

  //Decrement
  const decrement = () => {
    setCount(count - 1);
  };

  //Reset
  const reset = () => {
    setCount(initialValue);
  };

  //SetValue
  const setValue = (value) => {
    setCount(value);
  };

  return {
    count,
    increment,
    decrement,
    reset,
    setValue,
  };
}

export default useCounter;
