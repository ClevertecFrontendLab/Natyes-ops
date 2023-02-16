import { configureStore } from '@reduxjs/toolkit'

import appReduser from './app-slice'
import booksReduser from './books-slice'

export const store = configureStore({
  reducer: {
    library: booksReduser,
    app: appReduser
  },
  middleware:  (getDefaultMiddleware) => getDefaultMiddleware()
})