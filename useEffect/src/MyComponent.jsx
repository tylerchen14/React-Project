import React, { useState, useEffect } from 'react'

function MyComponent() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `Count: ${count} ${color}`
  }, [count, color])

  // useEffect(() => {
  //   document.title = `Count: ${count}`
  // },[count])

  // useEffect(() => {
  //   document.title = `My Counter Programing`
  // }, [])

  function addNumber() {
    setCount(c => c + 1)
  }

  function minusNumber() {
    setCount(c => c - 1)
  }

  function changeColor() {
    setColor(prevColor => prevColor === 'green' ? "red" : "green")
  }

  return (
    <>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={addNumber}>+</button>
      <button onClick={minusNumber}>-</button>
      <button onClick={changeColor}>改顏色</button>
    </>
  )
}

export default MyComponent