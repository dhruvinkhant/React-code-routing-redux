import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
    name: 'formdata',
    initialState: {
        textInput: '',
        emailInput: '',
        passwordInput: '',
        checkboxInput: false,
        radioInput: '',
        selectInput: '',
        textareaInput: '',
    }, // Set initial state as a number instead of an empty array
    reducers: {
        updateFormData(state, action){
            state.push(action.payload)
        }

    }
});

export default formSlice.reducer;
export const { updateFormData } = formSlice.actions;
