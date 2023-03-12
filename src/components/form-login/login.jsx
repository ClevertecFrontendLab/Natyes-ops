import React, {useState} from 'react'
import { Link } from 'react-router-dom';

export const Login = ({register, errors, getValues, status}) => {
    const [open, setOpen] = useState(false);
    const [view, setView] = useState('');

    return(
    <React.Fragment>
    <div className="form-row">
        <div className="form-login">
            <input 
                className={`form-input ${errors.identifier?.type === 'required' || status === 400 ? 'form-input--error' : ''}`}  
                placeholder='Логин'
                {...register('identifier')} />
            <label className='form-label body-l' htmlFor="login">Логин</label>
        </div>
        {
        errors.identifier?.type === 'required' ? 
        <span className="form-error info-l error-text" data-test-id='hint'>
            {errors.identifier?.message}
        </span>
        :null
        }
    </div>
    <div className="form-row">
        <div className="form-pass">
            <input 
               className={`form-input ${errors.password?.type === 'required' || status === 400 ? 'form-input--error' : ''}`}  
                placeholder='Пароль' 
                type={open ? 'text' : 'password'}
                {...register('password', {
                    onChange: () => setView(getValues('password'))
                })} />
            <label className='form-label body-l' htmlFor="pass">Пароль</label>
            { view && <input type='button' className={`input-eye ${open ? 'input-eye--open' : ''}`} onClick={() => setOpen(!open)} data-test-id={open ? 'eye-opened' : 'eye-closed'}/>}
        </div>
        {errors.password?.type === 'required' ? 
        <span className="form-error info-l error-text" data-test-id='hint'>
            {errors.password?.message}
        </span>
        : null
        }
        { status === 400 && 
            <div className='form-error info-l error-text' data-test-id='hint'>
                Неверный логин или пароль!
            </div>  
        }

        <Link to='/forgot-pass' className='link-forgot info-l'>{status === 400 ? 'Восстановить?':'Забыли логин или пароль?'}</Link>
    </div>
    <div className="form-row">
        <button type='submit' className='form-btn btn-l'>вход</button>
        <div className="form-no-register">
            <span className='body-l'>Нет учётной записи?</span>
            <Link to='/registration' className='link-register btn-s'>Регистрация</Link>
        </div>
    </div>
    </React.Fragment>
  )
}