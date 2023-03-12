import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate  } from 'react-router-dom';

import { loginOut } from '../../redux/user-slice';

export const Exit = () => {
    const navigate = useNavigate()
    const mWidth = 992;
    const cWidth = document.body.clientWidth;
    
    const dispatch = useDispatch()

    const exit = useCallback(() => {
        localStorage.removeItem('jwt');
        dispatch(loginOut());
        navigate('/');
    }, [dispatch, navigate]) 

    return (
    <div className={cWidth > mWidth ? 'menu-user--deck' : 'menu-user'}>
        <NavLink className='menu-link' to="/account"><h5 className='link link-oth'>Профиль</h5></NavLink>
        <button onClick={() => exit()} type='button' className='menu-link' to="/exit" data-test-id='exit-button'><h5 className='link link-oth' >Выход</h5></button>
    </div>
)}
