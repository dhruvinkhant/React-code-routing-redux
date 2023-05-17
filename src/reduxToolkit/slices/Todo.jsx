import { createSlice } from '@reduxjs/toolkit';

const toDoSlice = createSlice({
    name: 'todo',
    initialState: [], 
    reducers: {
        addItem(state, action) {
            state.push(action.payload) 
        },
        removeSingleItem(state, action) {
            state.splice(action.payload, 1)
        },
        removeAllItem(state){
            if(state.length === 0){
                alert("There is not iteam in the list")
            }
            state.splice(0, state.length);
        }
    }
});

export default toDoSlice.reducer;
export const { addItem, removeAllItem, removeSingleItem } = toDoSlice.actions;
