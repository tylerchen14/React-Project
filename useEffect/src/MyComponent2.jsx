import React, { useState, useEffect } from 'react'

function MyComponent2() {

  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    window.addEventListener('resize', resize)
    console.log('window change');

    return () => {
      window.removeEventListener('resize', resize);
      console.log('event listener removed');
    }
  }, [])

  useEffect(() => {
    document.title = `Size: ${width} x ${height}`
  }, [width, height])

  function resize() {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  return (<>
    <p>視窗寬度：{width}</p>
    <p>視窗高度：{height}</p>
  </>
  )
}

export default MyComponent2