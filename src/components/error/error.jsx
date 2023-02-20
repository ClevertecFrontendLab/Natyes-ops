import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { downError } from '../../redux/app-slice';

import img from './error.svg'
import exit from './exitmodal.svg'

import './error.css'

export const Error = () =>{ 
    const dispatch = useDispatch()
    const close = useCallback(() => {
        dispatch(downError())
    },[dispatch])
    
    return(<div className="error" data-test-id ='error'>
        <img src={img} alt="error" className="error-img" />
        <span className="error-text subtitle-l">Что-то пошло не так. Обновите страницу через некоторое время.</span>
        <button className="error-exit" type='button' onClick={close}>
            <img src={exit} alt="exit"  />
        </button>
    </div>
)}