// const initState = [{
//         id: 0,
//         name: "Learn react",
//         completed: false,
//         priority: 'Low',
//     },
//     {
//         id: 1,
//         name: "Learn reacts",
//         completed: false,
//         priority: 'Medium',
//     },
//     {
//         id: 2,
//         name: "Learn react-redux",
//         completed: true,
//         priority: 'High',
//     },
// ]
// const todoListReducers = (state = initState, action) => {
//     switch (action.type) {
//         case 'todoList/addTodo':
//             return [

//                 ...state,
//                 action.payload
//             ]
//         case 'todoList/toggleTodoStatus':
//             return state.map(todo => todo.id === action.payload ? {
//                 ...todo,
//                 completed: !todo.completed
//             } : todo)
//         default:
//             return state;
//     }
// }
// export default todoListReducers