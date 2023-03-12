import React from 'react'
import InputMask from 'react-input-mask'

export const StepThee = ({register, errors}) => (
    <React.Fragment>
        <div className="form-row">
          <div className="form-login">
              <InputMask 
                className={`form-input ${errors.phone?.type === 'required' || errors.phone?.type === 'matches' ? 'form-input--error' : ''}`}
                placeholder='Номер телефона'
                type='text'
                mask='+375 (99) 999-99-99'
                maskChar='x'
                {...register('phone')} />
              <label className='form-label body-l' htmlFor="phone">Номер телефона</label>
          </div>
          <span className={`form-error info-l ${errors.phone?.type === 'required' || errors.phone?.type === 'matches' ? 'error-text' : ''}`} data-test-id='hint'>
                {errors.phone?.message ? errors.phone.message : 'В формате +375 (xx) xxx-xx-xx'}
          </span>
        </div>
        <div className="form-row">
            <div className="form-pass">
                <input className={`form-input ${errors.email?.type === 'required' || errors.email?.type === 'email' ? 'form-input--error' : ''}`} placeholder='E-mail'
                    {...register('email')} />
                <label className='form-label body-l' htmlFor="email">E-mail</label>
            </div>
            <span className={`form-error info-l ${errors.email?.type === 'required' || errors.email?.type === 'email' ? 'error-text' : ''}`} data-test-id='hint'>
            {errors.email?.message ? errors.email.message : 'Введите корректный e-mail'}
            </span>
          </div>
    </React.Fragment>
)