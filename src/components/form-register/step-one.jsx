import React, { useState } from 'react'

import Check from './check.svg'


// eslint-disable-next-line complexity
export const StepOne = ({register, errors, getValues, submit}) => {
    const [open, setOpen] = useState(false);
    const [focusUsername, setUsername] = useState(false);
    const [focusPassword, setPassword] = useState(false);

    return(
      <React.Fragment>
      <div className="form-row">
          <div className="form-login">
              <input 
                className={`form-input ${(errors.username?.type === 'required' || errors.username?.type === 'matches') && focusUsername ? 'form-input--error' : ''}`} 
                placeholder='Логин'
                onFocus={()=>{setUsername(false)}}
                {...register('username', {
                  onBlur: () => setUsername(true)
                })}/>
              <label className='form-label body-l' htmlFor="username">Придумайте логин для входа</label>
          </div>
          <span className={`form-error info-l ${(errors.username?.type === 'required' && !submit && focusUsername) || (focusUsername && errors?.username)  ? 'error-text' : ''}`} data-test-id='hint'>
                { errors.username?.type !== 'required' || !focusUsername && !submit  ?
                  <React.Fragment>
                    Используйте для логина 
                    <span className={errors.username?.message === 'ch' ? 'error-text' : ''} data-test-id='hint'> латинский алфавит</span> и 
                    <span className={errors.username?.message === 'num' ? 'error-text' : ''} data-test-id='hint'> цифры</span>
                  </React.Fragment>
                  : errors.username.message
                }
          </span>
      </div>
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
                  : errors.password.message
                }
          </span>
      </div>
    </React.Fragment>
    )
}