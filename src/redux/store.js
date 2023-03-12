import { configureStore } from '@reduxjs/toolkit'

import appReduser from './app-slice'
import booksReduser from './books-slice'
import userReduser from './user-slice'

export const store = configureStore({
  reducer: {
    library: booksReduser,
    app: appReduser,
    user: userReduser
  },
  middleware:  (getDefaultMiddleware) => getDefaultMiddleware()
})