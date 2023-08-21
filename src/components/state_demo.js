import React, { useState } from 'react';

const Counter = () => {
  // Define a state variable 'count' and a function 'setCount' to update it
  const [count, setCount] = useState(0);

  // Event handler for incrementing the count
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Counter;

