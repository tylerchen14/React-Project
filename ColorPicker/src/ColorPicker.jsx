import React, { useState } from 'react';


function ColorPicker() {

  const [color, setColor] = useState('#FFFFFF')

  function colorChange(e) {
    setColor(e.target.value)
  }

  return (<div className='color-picker-container'>
    <h1 >Color Picker</h1>
    <div className='color-display' style={{ backgroundColor: color }}>
      <p>Selected Color: {color}</p>
    </div>
    <label>Select a Color:</label>
    <input type='color' value={color} onChange={colorChange} />
  </div>)
}

export default ColorPicker