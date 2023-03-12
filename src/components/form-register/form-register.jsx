import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { regUser } from '../../services/api'

import { StepOne } from './step-one';
import { StepThee } from './step-thee';
import { StepTwo } from './step-two';

import './form-register.css'

const one = yup.object({
  username: yup.string().required('Поле не может быть пустым').matches(/[1-9]+/, 'num').matches(/[a-zA-Z]+/, 'ch'),
  password: yup.string().required('Поле не может быть пустым').matches(/[1-9]+/, 'num').matches(/[A-Z]+/, 'ch').min(8),
}).required();
const two = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
}).required();
const three = yup.object({
  phone: yup.string().required('Поле не может быть пустым').matches(/^((\+375)[- ]?)?(\(?(29|33|25|44)\)?[-]?)?[\d\- ]{7,}$/, 'В формате +375 (xx) xxx-xx-xx'),
  email: yup.string().required('Поле не может быть пустым').email('Введите корректный e-mail'),
}).required();

export const FormRegister = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState(1);
  const error = useSelector(state => state.user.error)
	const status = useSelector(state => state.user.error?.status)

  const { 
    register,
    formState: {errors, isSubmitSuccessful, isValid},
    handleSubmit,
    getValues
  } = useForm({mode: 'all', criteriaMode: 'all', resolver: yupResolver(step === 1 ? one : step === 2 ? two : three)});

  const dispatch = useDispatch()

  const onSubmit = data => {
    if (step < 3 && !!errors) {
      setStep(step + 1)
    } else {
      setStep(step + 1)
      dispatch(regUser(data))
    }
  }

  return (
  <main className='check-page' data-test-id='auth'>
    <div className="form-box">
      <h3 className="check-page__title">Cleverland</h3>
      <form className="form" onSubmit={handleSubmit(onSubmit)} data-test-id='register-form'>
        <h4 className="form-title">
          {step !== 4 && 'Регистрация'}
          {step !== 4 && <div className="subtitle-s">{step} шаг из 3</div>}
        </h4>
        {step === 1 && <StepOne register={register} errors={errors} getValues={getValues} submit={isSubmitSuccessful}/>}
        {step === 2 && <StepTwo register={register} errors={errors}/>}
        {step === 3 && <StepThee register={register} errors={errors}/>}
        {!error && step === 4 &&
          <div className='form-error--status status-forgot' data-test-id='status-block'>
            <h4 className="form-title status-forgot__title">Регистрация успешна</h4>
            <span className='body-l status-forgot__text mb-32'>Регистрация прошла успешно. Зайдите в личный кабинет, используя свои логин и пароль</span>
            <button type='button' className='form-btn btn-l' onClick={() => navigate('/auth')}>Вход</button>
          </div>
        }
        {error && status && 
					<div className='form-error--status status-forgot' data-test-id='status-block'>
						<h4 className="form-title status-forgot__title">Данные не сохранились</h4>
						<span className='body-l status-forgot__text mb-32'>{status === 400 ? 'Такой логин или e-mail уже записан в системе. Попробуйте зарегистрироваться по другому логину или e-mail.' : 'Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз'}</span>
						<input className='form-btn btn-l' type="submit" value={status === 400 ? 'назад к регистрации' : 'повторить'}/>
					</div>
				}
        {step !== 4 && <div className="form-row">
          <input className='form-btn btn-l' 
          disabled={!isValid} 
          type="submit" value={step === 1 ? 'следующий шаг' : step === 2 ? 'последний шаг' : 'зарегистрироваться'} />
          <div className="form-no-register">
            <span className='body-l'>Есть учётная запись?</span>
            <Link to='/auth' className='link-register btn-s'>войти</Link>
          </div>
        </div>}
      </form>
    </div>
  </main>
  )
}
