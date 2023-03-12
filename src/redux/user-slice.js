import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        jwt: '',
        data: [],
        error: null,
        code: '',
        status: 0,
    }, 
    reducers: {
        setUserData: (state, action) => ({...state, data: action.payload}),
        setToken: (state, action) => ({...state, jwt: action.payload}),
        setError: (state, action) => ({...state, error: action.payload}),
        loginOut: (state) => ({...state, jwt: '', data: []}),
        forgotCode: (state, action) => ({...state, code: action.payload}),
        setStatus: (state, action) => ({...state, status: action.payload})
    }
})

export const { setUserData, setToken, setError, loginOut, forgotCode, setStatus } = userSlice.actions;

export default userSlice.reducer