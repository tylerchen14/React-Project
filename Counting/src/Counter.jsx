import React, { useState } from 'react';

function Counter() {

  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  }

  const decrease = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <div className='counterContainer'>
      <p className='countDisplay'>{count}</p>
      <button className='counterBtn' onClick={decrease}>-</button>
      <button className='counterBtn' onClick={reset}>Reset</button>
      <button className='counterBtn' onClick={increase}>+</button>

    </div>
  )
}


export default Counter