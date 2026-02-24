import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: []
}

export const todoslice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addtask: (state, action) => {
            const newTask = {
                id: Date.now(),
                text: action.payload
            };
            state.tasks.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        removetask: (state,action) => {
            state.tasks = state.tasks.filter(
                task => task.id !== action.payload

            )
            localStorage.setItem('tasks',JSON.stringify(state.tasks))
        }
    }
})

export const { addtask,removetask } = todoslice.actions;
export default todoslice.reducer;