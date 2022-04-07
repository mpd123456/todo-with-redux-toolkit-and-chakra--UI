import { configureStore } from "@reduxjs/toolkit"
import filtersSlice from "../components/Filters/filtersSlice"
import todoSlice from "../components/TodoList/todoSlice"
// import { createStore } from "redux";
// import reducers from "./reducer";
// import {composeWithDevTools} from 'redux-devtools-extension'

// const composeEnhansers=composeWithDevTools()

// const store=createStore(reducers,composeEnhansers);

// export default store;

// redux toolkit

const store=configureStore({
    reducer:{
        filters: filtersSlice.reducer,
        todoList: todoSlice.reducer,
    }
})
export default store