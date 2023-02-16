// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        data: false,
        loading: false,
        error: false
    },
    reducers: {
        getData: state => ({...state, data: true }),
        upLoader: state => ({...state, loading: true }),
        downLoader: state => ({...state, loading: false }),
        upError: state => ({...state, error: true }),
        downError: state => ({...state, error: false }),
    }
})

export const { upLoader, downLoader, upError, downError, getData } = appSlice.actions

export default appSlice.reducer