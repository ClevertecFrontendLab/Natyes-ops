import axios from 'axios';

import { downLoader, getData, upError, upLoader } from '../redux/app-slice';
import { setBook,setBooks, setCategory } from '../redux/books-slice';

export const HOST = 'https://strapi.cleverland.by'
const URL = 'https://strapi.cleverland.by/api/'

const api = axios.create({baseURL: URL});

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
        dispatch(downLoader());
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