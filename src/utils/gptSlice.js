import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false
    },
    reducers:{
        toggleGptSearch: (state)=>{
            state.showGptSearch = !state.showGptSearch;
        }
    }
})

export default gptSlice.reducer;
export const {toggleGptSearch} = gptSlice.actions
