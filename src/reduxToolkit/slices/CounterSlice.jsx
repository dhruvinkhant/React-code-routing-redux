import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0, // Set initial state as a number instead of an empty array
    reducers: {
        incrementCount(state) {
            return state + 1; // Increment the state value by 1
        },
        decrementCount(state) {
            if (state > 0) {
                return state - 1
            } else {
                return state = 0;
            }; // Decrement the state value by 1
        }
    }
});

export default counterSlice.reducer;
export const { incrementCount, decrementCount } = counterSlice.actions;
