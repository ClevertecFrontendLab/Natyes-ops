import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

import { Loader } from '../../components/loader';

import './login.css'

export const Login = () => {
    const navigate = useNavigate()
    const {loading} = useSelector(state => state.app)
    const jwt = useSelector(state => state.user.jwt)

    useEffect(()=> {
        if (jwt) {
            localStorage.setItem('jwt',jwt)
            navigate('/books/all')
        }
    }, [jwt, navigate])

    return(
    <main className='check-page'>
        {loading && <Loader/>}
        <Outlet/>
    </main>
)}
