import React, { useState, useEffect } from 'react'

function DigitalClock() {

  const [time, setTimer] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(new Date())
    }, 1000);

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  function changeTime() {
    let hour = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds()
    let meridiem = hour >= 12 ? "PM" : "AM"

    hour = hour % 12 || 12;
    return `${pad(hour)}:${pad(min)}:${pad(sec)} ${meridiem}`
  }

  function pad(num) {
    return (num < 10 ? "0" : "") + num

  }

  return (
    <div className='clock-container'>
      <div className='clock'>
        <span>{changeTime()}</span>
      </div>
    </div>
  )
}

export default DigitalClock