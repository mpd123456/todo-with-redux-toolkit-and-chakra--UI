import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'filters',
    initialState:{
        search: '',
        status: 'All',
        priority: [],
    },
    reducers: {
        searchFilterChange: (state,action)=>{
            state.search=action.payload;
        },
        // mutation-> Imma->viết code mutation nhưng immutation
        statusFilterChange: (state,action)=>{
            state.status=action.payload;
        },
        priorityFilterChange: (state,action)=>{
            state.priority=action.payload;
        }
    }

})