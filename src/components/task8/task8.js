import React, { useState } from 'react';
import  './task8.css'
import { Card } from 'react-bootstrap';
function IncrementCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    
    <div className='IncrementCounter '>
     <Card className='IncrementCounterr bg-success  col-6 mx-auto text-center mt-2  '>  
      <h1>Counter Value: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      </Card>
    </div>
  );
}

export default IncrementCounter;
