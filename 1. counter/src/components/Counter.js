import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    if (count !== 3) {
      setCount(count + 1);
    } else {
      alert("Maximum limit reached");
    }
  };

  const decrementHandler = () => {
    if (count !== 0) {
      setCount(count - 1);
    } else {
      alert("Minimum limit reached");
    }
  };

  return (
    <>
      <p>{count}</p>
      <button onClick={incrementHandler}> + </button>
      <button onClick={() => setCount(0)}> Reset </button>
      <button onClick={decrementHandler}> - </button>
    </>
  );
};

export default Counter;
