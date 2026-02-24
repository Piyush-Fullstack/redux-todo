# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.










        <!-- import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {

  const [text, settext] = useState('')
  const [tasks, settasks] = useState([])
  const [editIndex, setEditIndex] = useState(null)

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) settasks(storedTasks);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    let updatedTasks;

    if (editIndex !== null) {
      updatedTasks = [...tasks];
      updatedTasks[editIndex] = text;
      setEditIndex(null);
    } else {
      updatedTasks = [...tasks, text];
    }

    settasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    settext('');
  }

  const deleteHandler = (idx) => {
    const updatedTasks = tasks.filter((_, i) => i !== idx);
    settasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  return (
    <div className='p-3 bg-zinc-900 h-screen'>
      <form onSubmit={submitHandler} className='flex gap-2'>
        <input
          type="text"
          value={text}
          onChange={(e) => settext(e.target.value)}
          className='outline-indigo-300 outline-2 text-white w-full text-2xl p-2 rounded-md'
          placeholder='Enter your task'
        />

        <button className='bg-green-500 rounded-md text-md px-4 text-white font-bold cursor-pointer'>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </form>

      <div className='mt-3 bg-red-300 w-full h-80'>
        {tasks.map((task, idx) => (
          <div className='flex justify-between p-3 uppercase font-extrabold' key={idx}>
            <h1 className='text-2xl'>{task}</h1>

            <div className='flex gap-2'>
              <button
                onClick={() => {
                  settext(task);
                  setEditIndex(idx);
                }}
                className='bg-blue-500 rounded-md px-4 text-white font-bold'>
                Edit
              </button>

              <button
                onClick={() => deleteHandler(idx)}
                className='bg-red-500 rounded-md px-4 text-white font-bold'>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App -->