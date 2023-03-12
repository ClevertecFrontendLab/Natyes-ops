import axios from 'axios';

import { downLoader, getData, upError, upLoader } from '../redux/app-slice';
import { setBook,setBooks, setCategory } from '../redux/books-slice';
import { setError, setStatus, setToken, setUserData } from '../redux/user-slice';

export const HOST = 'https://strapi.cleverland.by'
const URL = 'https://strapi.cleverland.by/api/'

const api = axios.create({
    baseURL: URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

api.interceptors.request.use(config => {
    const token = localStorage.getItem('jwt')
    const createConfig = config;

    createConfig.headers.Authorization = token ? `Bearer ${token}` : ''
    
    return createConfig;
})
export const authUser = (identifier, password) => async dispatch => {
    try {
        dispatch(upLoader())
        const res = await api.post('auth/local', {identifier, password})
        const { user, jwt } = res.data

        localStorage.setItem('jwt', jwt)
        dispatch(setToken(jwt))
        dispatch(setUserData(user))
    } catch(e) {
        dispatch(setError({message: e.response.statusText, status: e.response.status}))
    }
}
export const regUser = data => async dispatch => {
    try {
        dispatch(upLoader())
        const res = await api.post('auth/local/register', {...data})
        const { user, jwt } = res.data

        localStorage.setItem('jwt', jwt)
        dispatch(setToken(jwt))
        dispatch(setUserData(user))
        dispatch(downLoader())
    } catch(e) {
        dispatch(setError({message: e.response.statusText, status: e.response.status}))
        dispatch(downLoader())
    }
}
export const forgotPass = data => async dispatch => {
    try {
        dispatch(upLoader())
        const res = await api.post('auth/forgot-password', {...data})

        dispatch(setStatus(res.status))
        dispatch(downLoader());
    } catch(e) {
        dispatch(downLoader());
        dispatch(setError({message: e.response.statusText, status: e.response.status}))
    }
}
export const resetPass = data => async dispatch => {
    try {
        dispatch(upLoader())
        const res = await api.post('auth/reset-password', {...data})
        const { user, jwt } = res.data
        
        dispatch(setToken(jwt))
        dispatch(setUserData(user))
        dispatch(setStatus(res.status))
        dispatch(downLoader());
    } catch(e) {
        dispatch(downLoader());
        dispatch(setStatus(e.response.status))
        dispatch(setError({message: e.response.statusText, status: e.response.status}))
    }
}
export const getLibrary = () => async dispatch => {
    try {
        dispatch(upLoader())
        const res = await api.get('books');

        dispatch(setBooks(res.data));
        dispatch(downLoader());
    } catch (e) {
        dispatch(upError())
    }
}
export const getCategory = () => async dispatch => {
    try {
        dispatch(upLoader())
        const res = await api.get('categories');
        
        dispatch(setCategory(res.data));
    } catch (e) {
        dispatch(upError())
    }
}
export const getBook = (id) => async dispatch => {
    try {
        dispatch(upLoader())
        const res = await api.get(`books/${id}`);
        
        dispatch(setBook(res.data));
        dispatch(getData());
        dispatch(downLoader());
    } catch (e) {
        dispatch(upError())
    }
}