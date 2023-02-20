// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

export const booksSlice = createSlice({
    name: 'library',
    initialState: {
        books: [],
        category: [],
        currentBook: null
    },
    reducers: {
        setBooks: (state, action) => ({...state, books: action.payload }),
        setCategory: (state, action) => ({...state, category: action.payload }),
        setBook: (state, action) => ({...state, currentBook: action.payload }),
    }
})

export const { setBooks, setCategory, setBook } = booksSlice.actions

export default booksSlice.reducer