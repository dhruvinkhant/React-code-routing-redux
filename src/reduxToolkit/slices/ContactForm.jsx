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
            // console.log("called the updateFormData")
            const { name, value, type, checked } = action.payload;
            const updatedValue = type === 'checkbox' ? checked : value;
            // console.log("updatedValue___",updatedValue)
      
            state[name] = updatedValue;
        }

    }
});

export default formSlice.reducer;
export const { updateFormData } = formSlice.actions;
