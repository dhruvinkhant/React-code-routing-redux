import { createSlice } from '@reduxjs/toolkit';

const toDoSlice = createSlice({
    name: 'todo',
    initialState: [], 
    reducers: {
        addItem(state, action) {
            state.push(action.payload) 
        },
        removeAllItem(state, action) {
            state.splice(action.payload, 1)
        }
    }
});

export default toDoSlice.reducer;
export const { addItem, removeAllItem } = toDoSlice.actions;
