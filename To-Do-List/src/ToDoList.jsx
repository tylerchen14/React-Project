import React, { useState } from 'react';

function ToDoList() {

  const [task, setTasks] = useState(["吃早餐", "洗澡", "掃地"]);
  const [newtask, setNewtasks] = useState("");

  function changeTask(e) {
    setNewtasks(e.target.value)
  }

  function addTask() {

    if (newtask.trim() !== "") {
      setTasks(t => [...task, newtask])
      setNewtasks("");
    }
  }

  function deleteTask(index) {
    const updatedTask = task.filter((_, i) => i !== index);
    setTasks(updatedTask)
  }

  function moveUp(index) {
    if (index > 0) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];
      setTasks(updatedTask)
    }
  }

  function moveDown(index) {
    if (index < task.length - 1) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
      setTasks(updatedTask)
    }
  }

  return (
    <div className='to-do-list'>
      <h1>To Do List</h1>
      <div>
        <input
          type='text'
          placeholder='輸入項目'
          value={newtask}
          onChange={changeTask}
        />
        <button className='add-button' onClick={addTask}>新增</button>
      </div>
      <ol>
        {task.map((t, index) =>
          <li key={index}><span className='text'>{t}</span>
            <button className='delete-button' onClick={() => deleteTask(index)}>刪除</button>
            <button className='move-button' onClick={() => moveUp(index)}>👆</button>
            <button className='move-button' onClick={() => moveDown(index)}>👇</button>
          </li>
        )}
      </ol>
    </div>
  )
}

export default ToDoList