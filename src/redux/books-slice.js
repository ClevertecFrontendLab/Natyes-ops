// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

export const booksSlice = createSlice({
    name: 'library',
    initialState: {
        books: [],
        category: []
    },
    reducers: {
        setBooks: (state, action) => ({...state, books: action.payload }),
        setCategory: (state, action) => ({...state, category: action.payload }),
    }
})

export const { setBooks, setCategory, findCategoryPath } = booksSlice.actions

export default booksSlice.reducer