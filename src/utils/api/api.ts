import axios from 'axios';
import { LOCAL_STORAGE_KEY } from '@constants/app';

export const api = axios.create({
    baseURL: 'https://marathon-api.clevertec.ru',
});

api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization = `Bearer ${localStorage.getItem(LOCAL_STORAGE_KEY)}` || '';
    }
    return config;
});
