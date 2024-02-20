import React, { useState, useEffect, useRef } from 'react'


function Stopwatch() {

  const [isRunning, setIsRunning] = useState(false)
  const [elapsedTime, setelapsedTime] = useState(0)
  const intervalIdRef = useRef(null)
  const startTimeRef = useRef(0)

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setelapsedTime(Date.now() - startTimeRef.current)
      }, 10)
    }
    return () => {
      clearInterval(intervalIdRef.current)
    }
  }, [isRunning])


  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  function stop() {
    setIsRunning(false)

  }

  function reset() {
    setIsRunning(false)
    setelapsedTime(0)
  }

  function formatTime() {

    let hour = Math.floor(elapsedTime / (1000 * 60 * 60))
    let min = Math.floor(elapsedTime / (1000 * 60) % 60)
    let sec = Math.floor(elapsedTime / (1000) % 60)
    let mil = Math.floor((elapsedTime % 1000) / 10)

    hour = String(hour).padStart(2, "0")
    min = String(min).padStart(2, "0")
    sec = String(sec).padStart(2, "0")
    mil = String(mil).padStart(2, "0")

    return `${min}:${sec}:${mil}`
  }

  return (<div className='stopwatch'>
    <div className='display'>{formatTime()}</div>
    <div className='controls'>
      <button className='start-button' onClick={start}>開始</button>
      <button className='stop-button' onClick={stop}>暫停</button>
      <button className='reset-button' onClick={reset}>重置</button>
    </div>
  </div>)
}

export default Stopwatch