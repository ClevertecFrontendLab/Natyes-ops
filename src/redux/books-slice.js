// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

export const booksSlice = createSlice({
    name: 'library',
    initialState: {
        books: []
    },
    reducers: {
        setBooks: (state, action) => ({...state, books: action.payload }),
    }
})

export const { setBooks } = booksSlice.actions

export default booksSlice.reducer