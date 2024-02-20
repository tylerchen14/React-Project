import React, { useState, useRef, useEffect } from 'react';

function MyComponent() {

  const inputRef1 = useRef(null)
  const inputRef2 = useRef(null)
  const inputRef3 = useRef(null)

  useEffect(() => {
    console.log('改變了');
  })

  function click1() {
    inputRef1.current.focus()
    inputRef1.current.style.backgroundColor = 'yellow'
    inputRef2.current.style.backgroundColor = ''
    inputRef3.current.style.backgroundColor = ''
    
  }

  function click2() {
    inputRef2.current.focus()
    inputRef2.current.style.backgroundColor = 'yellow'
    inputRef1.current.style.backgroundColor = ''
    inputRef3.current.style.backgroundColor = ''
  }

  function click3() {
    inputRef3.current.focus()
    inputRef3.current.style.backgroundColor = 'yellow'
    inputRef2.current.style.backgroundColor = ''
    inputRef1.current.style.backgroundColor = ''
  }

  return (
    <div>
      <button onClick={click1}>點我1</button>
      <input ref={inputRef1} /><br></br>
      <button onClick={click2}>點我2</button>
      <input ref={inputRef2} /><br></br>
      <button onClick={click3}>點我3</button>
      <input ref={inputRef3} />
    </div>
  )
}

export default MyComponent