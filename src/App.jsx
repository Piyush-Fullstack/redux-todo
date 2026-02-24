import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtask, removetask } from './redux/features/TodoSlice'
import './App.css'

const App = () => {

  const [text, settext] = useState('')
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.todo.tasks)

  const submitHandler = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    dispatch(addtask(text))
    settext('')
  }

  const removeHandler = (id) => {
    dispatch(removetask(id))
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">

      <form onSubmit={submitHandler} className="bg-white p-6 rounded-2xl shadow-md w-80">

        <h2 className="text-xl font-bold mb-4 text-center">Todo App</h2>

        <input
          type="text"
          placeholder="Enter task"
          value={text}
          onChange={(e) => settext(e.target.value)}
          className="w-full p-2 border rounded-lg mb-4"
        />

        <button className="w-full bg-indigo-500 text-white py-2 rounded-lg">
          Add
        </button>

        <div className='mt-3 w-full'>
          {tasks.map(task => (
            <div key={task.id} className='flex justify-between p-2 border-b'>
              <span>{task.text}</span>
              <button
                onClick={() => removeHandler(task.id)}
                className='bg-red-500 px-3 text-white rounded'
              >
                Delete
              </button>
            </div>
          ))}
        </div>

      </form>
    </div>
  )
}

export default App