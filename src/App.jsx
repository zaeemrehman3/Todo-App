import './todo.css';

import { useRef, useState } from 'react'

function App() {
  const input = useRef()
  const [arr , setArr] = useState([])

  const addTask = (event) => {
    event.preventDefault()
    arr.push(input.current.value)
    setArr([...arr])
    input.current.value = ""
  }

  const deleteTask = (index) => {
    arr.splice(index , 1);
    setArr([...arr]);
  }

  const editTask = (index) => {
    arr.splice(index , 1 , prompt())
    setArr([...arr]);
  }

  return (
    <>
     <div className='todo-app'>
      <h1>To-Do List</h1>
      <div>
        <form onSubmit={addTask}>
          <input type="text" placeholder='Enter Task' ref={input} />
          <button className='add-button' type='submit'>Add</button>
        </form>
      </div>
      </div>
      <div className='todo-list'>
      <ol>
        
        {arr.length > 0 ? arr.map((item, index) => {
          return <li key={index}>{item}
            <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
            <button className='edit-button' onClick={() => editTask(index)}>Edit</button>
          </li>
        }) : <h1 className="no-item">No item found...</h1>}
      </ol>
      </div>
      </>
      
  )
}


export default App