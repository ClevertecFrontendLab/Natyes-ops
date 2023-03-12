import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { downError, downLoader } from '../../redux/app-slice';
import { authUser } from '../../services/api';

import { Login } from './login';

import './form-login.css'

const check = yup.object({
	identifier: yup.string().required('Поле не может быть пустым'),
	password: yup.string().required('Поле не может быть пустым')
})

export const FormLogin = () => {
	const error = useSelector(state => state.user.error)
	const status = useSelector(state => state.user.error?.status)

    const { 
      register,
      formState: {errors},
      handleSubmit,
	  getValues
    } = useForm({mode: 'all', resolver: yupResolver(check)});

	const dispatch = useDispatch()

	useEffect(() => {
		if (error) {
			dispatch(downError())
			dispatch(downLoader())
		}
	}, [error, dispatch])

	const onSubmit = ({identifier, password}) => {
		dispatch(authUser(identifier, password))
	}
	
    return (
		<div className="form-box" data-test-id='auth'>
			<h3 className="check-page__title">Cleverland</h3>
			<form className="form" onSubmit={handleSubmit(onSubmit)} data-test-id='auth-form'>
				{!error || status === 400 ?
					<React.Fragment>
						<h4 className="form-title">Bход в личный кабинет</h4>
						<Login register={register} errors={errors} getValues={getValues} status={status}/>
					</React.Fragment>
					: null
				}
				{error && status !== 400 && 
					<div className='form-error--status status-forgot' data-test-id='status-block'>
						<h4 className="form-title status-forgot__title">Вход не выполнен</h4>
						<span className='body-l status-forgot__text mb-32'>Что-то пошло не так. Попробуйте ещё раз</span>
						<input className='form-btn btn-l' type="submit" value='повторить'/>
					</div>
				}
			</form>
		</div>
    )
}
