import { configureStore } from '@reduxjs/toolkit'
import cashReducer from './modules/cashStore'

const store = configureStore({
  reducer: {
    cash: cashReducer
  }
})

export default store