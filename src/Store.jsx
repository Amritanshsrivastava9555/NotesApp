import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from './Features/PasteSlice'

export default configureStore({
  reducer: {
    paste : pasteReducer,
  },
})