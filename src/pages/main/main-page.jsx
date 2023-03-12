import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { App } from '../../components/app';

import './main-page.css';

export const MainPage = () => {
    const navigate = useNavigate()
    const jwt = localStorage.getItem('jwt')

    useEffect(()=> {
        if (!jwt) {
            navigate('/auth')
        }
    }, [jwt, navigate])
    
    return(
    <section className='main-page'>
        {jwt && <App/>}
    </section>
)}