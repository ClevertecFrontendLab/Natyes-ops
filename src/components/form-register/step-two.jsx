import React from 'react'

export const StepTwo = ({register, errors}) => (
    <React.Fragment>
        <div className="form-row">
          <div className="form-login">
              <input className={`form-input ${errors.firstName?.type === 'required' ? 'form-input--error' : ''}`} placeholder='Имя'
                  {...register('firstName')} />
              <label className='form-label body-l' htmlFor="firstName">Имя</label>
          </div>
          {errors.firstName?.type === 'required' && 
            <span className='form-error info-l error-text' data-test-id='hint'>
                Поле не может быть пустым
            </span>}
      </div>
      <div className="form-row">
              <div className="form-pass">
                  <input className={`form-input ${errors.lastName?.type === 'required' ? 'form-input--error' : ''}`}  placeholder='Фамилия'
                      {...register('lastName')} />
                  <label className='form-label body-l' htmlFor="lastName">Фамилия</label>
              </div>
              {errors.lastName?.type === 'required' && 
              <span className='form-error info-l error-text' data-test-id='hint'>
                  Поле не может быть пустым
              </span>}
          </div>
    </React.Fragment>
)
