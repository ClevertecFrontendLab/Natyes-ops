import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Check from './check.svg'

// eslint-disable-next-line complexity
export const FormResetPass = ({register, errors, getValues, submit, valid}) => {
    const [open, setOpen] = useState(false);
    const [two, setTwo] = useState(false);
    const [focusPassword, setPassword] = useState(false);
    const [focusConfirm, setConfirm] = useState(false);

    return (
        <div className="form-container" data-test-id='reset-password-form'>
                <h4 className="form-title">
                    Восстановление пароля
                </h4>
                <div className="form-row">
                    <div className="form-pass">
                        <input 
                        className={`form-input ${errors.password?.type === 'required' 
                        || errors.password ? 'form-input--error' 
                        : ''}`} 
                        type={open ? 'text' : 'password'}
                        placeholder='Пароль'
                        onFocus={()=>{setPassword(false)}}
                        {...register('password', {
                            onBlur: () => setPassword(true)
                        })} />
                        <label className='form-label body-l' htmlFor="password">Пароль</label>
                        <input type='button' className={`input-eye ${open ? 'input-eye--open' : ''}`} onClick={() => setOpen(!open)} data-test-id={open ? 'eye-closed' : ' eye-opened'}/>
                        {!errors.password && getValues('password') ? 
                        <img src={Check} className='input-check--none input-check' alt="" data-test-id='checkmark'/>
                        : null
                        }
                    </div>
                    <span className={`form-error info-l ${(errors.password?.type === 'required' && !submit && focusPassword) || (focusPassword && errors?.password)  ? 'error-text' : ''}`} data-test-id='hint'>
                            { errors.password?.type !== 'required' || !focusPassword && !submit  ?
                            <React.Fragment>
                                Пароль
                                <span className={errors.password?.type === 'min' ? 'error-text' : ''} data-test-id='hint'> не менее 8 символов</span>, с 
                                <span className={errors.password?.message === 'ch' ? 'error-text' : ''} data-test-id='hint'> заглавной буквой</span> и
                                <span className={errors.password?.message === 'num' ? 'error-text' : ''} data-test-id='hint'> цифрой</span>
                            </React.Fragment>
                            : errors.password?.message
                            }
                    </span>
                </div>
                <div className="form-row">
                    <div className="form-pass">
                        <input 
                        className={`form-input ${errors.passwordConfirmation?.type === 'required' 
                        || errors.passwordConfirmation ? 'form-input--error' 
                        : ''}`} 
                        type={two ? 'text' : 'password'}
                        placeholder='Пароль'
                        onFocus={()=>{setConfirm(false)}}
                        {...register('passwordConfirmation', {
                            onBlur: () => setConfirm(true)
                        })} />
                        <label className='form-label body-l' htmlFor="password">Пароль</label>
                        <input type='button' className={`input-eye ${two ? 'input-eye--open' : ''}`} onClick={() => setTwo(!two)} data-test-id={two ? 'eye-closed' : ' eye-opened'}/>
                    </div>
                    <span className={`form-error info-l ${(errors.passwordConfirmation?.type === 'required' && !submit && focusConfirm) || (focusConfirm && errors?.passwordConfirmation)  ? 'error-text' : ''}`} data-test-id='hint'>
                            { errors?.passwordConfirmation && getValues('passwordConfirmation') !== '' || !focusConfirm && !submit  ?
                                errors.passwordConfirmation?.message
                            : errors?.passwordConfirmation && getValues('passwordConfirmation') === '' ? 'Поле не может быть пустым' : null
                            }
                    </span>
                </div>
            
                <div className="form-row">
                <input className='form-btn btn-l' type="submit" disabled={!valid} value='сохранить изменения' />
                <div className="form-no-register">
                    <span className='body-l'>После сохранения войдите в библиотеку, используя новый пароль</span>
                </div>
                </div>
            </div>
)}