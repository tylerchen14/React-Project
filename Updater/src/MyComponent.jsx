import React, { useState } from 'react';

function MyComponent() {

  const [cat, setCat] = useState({
    name: "多多",
    persona: "溫順",
    breed: "虎斑貓"
  })

  function changeName(e) {
    setCat(c => ({ ...cat, name: e.target.value }))
  }

  function changePersona(e) {
    setCat(c => ({ ...cat, persona: e.target.value }))
  }

  function changeBreed(e) {
    setCat(c => ({ ...cat, breed: e.target.value }))
  }

  return (
    <div>
      <p>你最喜歡的貓貓是 {cat.name} 他是 {cat.persona}{cat.breed}</p>
      <input type='text' value={cat.name} onChange={changeName} /><br />
      <input type='text' value={cat.persona} onChange={changePersona} /><br />
      <input type='text' value={cat.breed} onChange={changeBreed} /><br />
    </div>)
}

export default MyComponent