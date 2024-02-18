import React, { useState } from 'react';

function MyComponent2() {

  const [foods, setFoods] = useState(["拉麵", "義大利麵", "海鮮"])

  function addFoods() {
    const newfood = document.getElementById('foodInput').value
    document.getElementById('foodInput').value = ""

    setFoods(f => [...foods, newfood]);
  }

  function deleteFoods(index) {
    setFoods(foods.filter((_, i) => i !== index))
  }

  return (
    <div>
      <h2>午餐菜單</h2>
      <ul>
        {foods.map((food, index) =>
          <li key={index} onClick={() => deleteFoods(index)}>{food}</li>)}
      </ul>
      <input type='text' id='foodInput' placeholder='輸入想吃的午餐'></input>
      <button onClick={addFoods}>增加</button>
    </div>
  )
}

export default MyComponent2