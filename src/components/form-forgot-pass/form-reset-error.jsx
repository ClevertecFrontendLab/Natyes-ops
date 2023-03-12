import React from 'react'
import { useNavigate } from 'react-router-dom'

export const FormResetError = () => {
    const navigate = useNavigate()

    return(
    <React.Fragment>
        <div className='status-forgot' data-test-id='status-block'>
            <h4 className="form-title status-forgot__title">
                Данные не сохранились
            </h4>
            <span className='status-forgot__text'>
                Что-то пошло не так. Попробуйте ещё раз
            </span>
        </div>
        <button type='button' className='form-btn btn-l' onClick={() => navigate(0)}>повторить</button>
    </React.Fragment>
)}