import React, { useState } from 'react';

function MyComponent3() {

  const [emp, setEmp] = useState([])
  const [empName, setName] = useState("")
  const [empDepartment, setDepartment] = useState("")
  const [empOnboardYear, setOnboardYear] = useState(new Date().getFullYear())


  function addEmp() {
    const newEmp = { Name: empName, Department: empDepartment, Onboard: empOnboardYear }

    setEmp(person => [...person, newEmp])
    setName("")
    setDepartment("")
    setOnboardYear(new Date().getFullYear())
  }

  function deleteEmp(index) {
    setEmp(person => person.filter((_, i) => i !== index))
  }

  function changeName(e) {
    setName(e.target.value)
  }

  function changeDepartment(e) {
    setDepartment(e.target.value)``
  }

  function changeOnboardYear(e) {
    setOnboardYear(e.target.value)
  }


  return (<div>
    <h2>入職人員表</h2>
    <ul>
      {emp.map((person, index) => <li key={index} onClick={() => deleteEmp(index)}>{person.Name} {person.Department} {person.Onboard}</li>)}
    </ul>
    <input type='text' value={empName} onChange={changeName} placeholder='請輸入姓名' /><br />

    <input type='text' value={empDepartment} onChange={changeDepartment} placeholder='請輸入部門' /><br />

    <input type='number' value={empOnboardYear} onChange={changeOnboardYear} />

    <button onClick={addEmp}>新增</button>

  </div>)

}

export default MyComponent3