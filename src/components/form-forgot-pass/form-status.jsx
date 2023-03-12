import React from 'react'
import { useNavigate } from 'react-router-dom'

export const FormStatus = (props) => {
    const navigate = useNavigate()
    const {title, text} = props

    return(
    <React.Fragment>
        <div className='status-forgot' data-test-id='status-block'>
            <h4 className="form-title status-forgot__title">
                {title}
            </h4>
            <span className='status-forgot__text'>
                {text}
            </span>
        </div>
        <button type='button' className='form-btn btn-l' onClick={() => navigate('auth')}>вход</button>
    </React.Fragment>
)}