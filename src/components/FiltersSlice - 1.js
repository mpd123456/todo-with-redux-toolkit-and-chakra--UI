// const initState = {
//     search: '',
//     status: 'All',
//     priority: []
//     // từng phần của filter
//     // độ ưu tiên
// }


// const filtersReducers = (state = initState, action) => {
//     switch (action.type) {
//         case 'filters/searchFilterChange':
//             return {
//                 ...state,
//                 search: action.payload
//                 }
//         case 'filters/statusFilterChange':
//             return {
//                 ...state,
//                 status: action.payload
//             }
//         case 'filters/priorityFilterChange':
//             return {
//                 ...state,
//                 priority: action.payload
//             }
//         default:
//             return state;
//     }
// }
// export default filtersReducers