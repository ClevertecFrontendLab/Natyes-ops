import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Reset = ({register, errors}) => {
    const error = useSelector(state => state.user.error)
    const [focusEmail, setEmail] = useState(false);

    return(
        <React.Fragment>
            <div className="form-top">
                <Link to='/auth' className='link-auth btn-s'>вход в личный кабинет</Link>
            </div>
            <div className="form-container" data-test-id='send-email-form'>
                <h4 className="form-title">
                    Восстановление пароля
                </h4>
                <div className="form-row">
                    <div className="form-pass">
                        <input 
                            className={`form-input ${errors.email?.type === 'required' || errors.email?.type === 'email' || error ? 'form-input--error' : ''}`}
                            placeholder='E-mail'
                            onFocus={()=>{setEmail(false)}}
                            {...register('email', {
                                onBlur: () => setEmail(true)
                            })} />
                        <label className='form-label body-l' htmlFor="lastName">E-mail</label>
                    </div>
                    <span className={`form-error info-l ${errors.email?.type === 'required' || errors.email?.type === 'email' || error ? 'error-text' : ''}`} data-test-id='hint'>
                        {errors?.email ? errors.email.message : error ? 'error' : errors?.email === undefined && focusEmail ? 'Поле не может быть пустым' : ''}
                    </span>
                    <div className='form-error info-l'>
                        На это email  будет отправлено письмо с инструкциями по восстановлению пароля
                    </div>
                </div>
                <div className="form-row">
                <input className='form-btn btn-l' type="submit" value='восстановить' />
                <div className="form-no-register">
                    <span className='body-l'>Нет учетной записи?</span>
                    <Link to='/registration' className='link-register btn-s'>регистрация</Link>
                </div>
                </div>
            </div>
        </React.Fragment>
)}