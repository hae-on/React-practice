import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncreaseCount = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecreaseCount = () => {
    if (count > 0) setCount((prev) => prev - 1);
  };

  return (
    <div>
      <button data-testid='decrement-button' onClick={handleDecreaseCount}>
        -
      </button>
      <button data-testid='increment-button' onClick={handleIncreaseCount}>
        +
      </button>
      <p>clicked: {count}</p>
    </div>
  );
};

export default Counter;
