import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name:'todoList',
    initialState:[
        {
            id: 0,
            name: "Learn react",
            completed: false,
            priority: 'Low',
        },
        {
            id: 1,
            name: "Learn reacts",
            completed: false,
            priority: 'Medium',
        },
        {
            id: 2,
            name: "Learn react-redux",
            completed: true,
            priority: 'High',
        },
    ],
    reducers:{
        addTodo:(state,action)=>{
            state.push(action.payload)
        },
        toggleTodoStatus: (state,action)=>{
            const currentTodo=state.find(todo => todo.id === action.payload )
            if(currentTodo){
                currentTodo.completed=!currentTodo.completed

            }
        }
    }
})