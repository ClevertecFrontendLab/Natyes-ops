import React from 'react'
import { useNavigate } from 'react-router-dom'

export const FormResetSucsess = () => {
    const navigate = useNavigate()

    return(
    <React.Fragment>
        <div className='status-forgot' data-test-id='status-block'>
            <h4 className="form-title status-forgot__title">
                Новые данные сохранены
            </h4>
            <span className='status-forgot__text'>
                Зайдите в личный кабинет, используя свои логин и новый пароль
            </span>
        </div>
        <button type='button' className='form-btn btn-l' onClick={() => navigate('auth')}>вход</button>
    </React.Fragment>
)}