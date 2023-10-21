import React, { useState } from "react";
import useCounter from "../hooks/useCounter";
import { Link } from "react-router-dom";
import "../Styles/Counter.css";
import "../Styles/Welcome.css";
import CounterImg from "../img/—Pngtree—digital purple circle_5976247.png";

function Counter() {
  const { count, increment, decrement, reset, setValue } = useCounter(0);

  // Initialize as an empty string
  const [customValue, setCustomValue] = useState("");

  const handleSetValue = () => {
    // Ensure it's a number or fallback to 0
    setValue(customValue ? Number(customValue) : 0);
  };

  //Setting background color
  document.body.classList.add("counter-background");
  return (
    //The main counter body
    <section className="CounterWhole">
      <h2 className="CountHead"> Counter </h2>
      <div className="CounterImage">
        <img className="CounterImg" src={CounterImg} alt=""></img>
      </div>

      {/* THe counter and the buttons */}
      <h2 className="CounterNumber">{count}</h2>
      <div className="WholeButtons">
        <button className="Increase" onClick={increment}>
          Increment
        </button>
        <button className="Decrease" onClick={decrement}>
          Decrement
        </button>
        <button className="Reset" onClick={reset}>
          Reset
        </button>
      </div>

      {/* The input field, button and Home button */}
      <div className="SetValues">
        <input
          type="number"
          className="Input"
          placeholder="Input Number"
          style={{ width: "380px" }}
          onChange={(e) => setCustomValue(e.target.value)}
        />
        <button className="SetValue" onClick={handleSetValue}>
          Set Value
        </button>

        <Link className="BackHome" to="/">
          Back Home
        </Link>
      </div>
    </section>
  );
}

export default Counter;
