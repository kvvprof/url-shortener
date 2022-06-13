import { configureStore } from "@reduxjs/toolkit"
import urlSlice from './urlSlice'
import themeSlice from './themeSlice'

export const store = configureStore({
  reducer: {
    urlSlice,
    themeSlice
  }
})