import {
    createSelector
} from "@reduxjs/toolkit";
// export const todoListSelector=(state)=>{
//     const searchText=searchTextSelector(state)
//     const todoRemaining=state.todoList.filter((todo)=>{
//         return todo.name.includes(state.filters.search)
//     })
//     return todoRemaining
// }
// export const searchTextSelector=state=>state.filters.search  
export const searchTextSelector = state => state.filters.search
export const prioritiesFiltersSelector = state => state.filters.priority
export const statusFiltersSelector = state => state.filters.status
export const todoListSelector = state => state.todoList
export const todosRemainingSelector = createSelector(todoListSelector, statusFiltersSelector,searchTextSelector,prioritiesFiltersSelector, (todoList,status, searchText,prioriries) => {
    return todoList.filter((todo) => {
        if(status==='All'){
            return prioriries.length===0 ?  todo.name.includes(searchText) : todo.name.includes(searchText)&& prioriries.includes(todo.priority)
        }

        return( todo.name.includes(searchText) && (status==='Completed' ? todo.completed : !todo.completed && (prioriries.length ?  prioriries.includes(todo.priority) : true)
    ));
})
})
