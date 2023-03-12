import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { forgotCode, setStatus } from '../../redux/user-slice';
import { forgotPass, resetPass } from '../../services/api';

import { FormResetPass } from './form-reser-pass';
import { FormResetError } from './form-reset-error';
import { FormResetSucsess } from './form-reset-sucsess';
import { Reset } from './reset';

const checkEmail = yup.object({
    email: yup.string().required('Поле не может быть пустым').email('Введите корректный e-mail'),
  }).required();
const password = yup.object({
    password: yup.string().required('Поле не может быть пустым').matches(/[1-9]+/, 'num').matches(/[A-Z]+/, 'ch').min(8),
    passwordConfirmation: yup.string().required().oneOf([yup.ref('password')],'Пароли не совпадают')
  }).required();

export const FormForgotPass = () => {
    const [search] = useSearchParams()
    const status = useSelector(state => state.user.status)
    const error = useSelector(state => state.user.error)
    const code = search.get('code')
    
    const { 
      register,
      formState: {errors, isValid},
      handleSubmit,
      getValues,
      submit
    } = useForm({mode: 'all', resolver: yupResolver(code ? password : checkEmail)});
  
    const dispatch = useDispatch()
  
    const onSubmit = data => code ? dispatch(resetPass({...data, code})) : dispatch(forgotPass(data))
    
    useEffect(() => {
      if (code) {
        dispatch(setStatus(false))
        dispatch(forgotCode(code))
      }
    }, [dispatch, code])
    

  return (
    <main className='check-page' data-test-id='auth'>
    <div className="form-box">
      <h3 className="check-page__title">Cleverland</h3>
      <form className="form" onSubmit={handleSubmit(onSubmit)} data-test-id={status === 200 ? 'status-block' : code ? 'reset-password-form' : 'send-email-form'}>
        {status === 200  && !code ? 
            <div className='status-forgot' data-test-id='status-block'>
                <h4 className="form-title status-forgot__title">
                    Письмо выслано
                </h4>
                <span className='status-forgot__text'>
                  Перейдите в вашу почту, чтобы воспользоваться подсказками по восстановлению пароля
                </span>
            </div>
            : null
        }
        
        {!code && status !== 200 && <Reset register={register} errors={errors}/> }
        {code && (status !== 500 && status !== 200 ) ? <FormResetPass register={register} errors={errors} getValues={getValues} submit={submit} valid={isValid}/> : null}
        {code && !error && status === 200 ? <FormResetSucsess/> : status === 500 ? <FormResetError/>  : null}
      </form>
    </div>
    </main>
  )
}
