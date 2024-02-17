import React, { useState } from 'react'

function MyComponent() {
  const [name, setName] = useState('Guest');
  const [age, setAge] = useState(0);
  const [employ, setEmploy] = useState(false);

  const updateName = ()=>{
    setName('Tyler')
  }

  const incrementAge=()=>{
    setAge(age +1)
  }

  const checkEmployment=()=>{
    setEmploy(!employ)
  }

  return (<div>
    <p>Name: {name}</p>
    <button onClick={updateName}>Set Name</button>

    <p>Age: {age}</p>
    <button onClick={incrementAge}>Increment Age</button>

    <p>Employment: {employ?"Yes":"No"}</p>
    <button onClick={checkEmployment}>Change Employment</button>
  </div>)
}

export default MyComponent