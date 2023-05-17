import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './slices/CounterSlice'
import formSlice from './slices/ContactForm'
import toDoSlice from './slices/Todo'

export const store = configureStore({
  reducer: {
    count: CounterSlice,
    formdata: formSlice,
    todo: toDoSlice
  },
})