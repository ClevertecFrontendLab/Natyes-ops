import { RoutesPaths } from '@constants/routes';
import { registrationActions } from '@redux/models/registration';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { authSchema, registrationCredentials } from '@types/api/auth';
import { push } from 'redux-first-history';

import { api } from '../api';

export const registrationUser = createAsyncThunk<authSchema, registrationCredentials>(
    'auth/registration',
    async ({ email, password }, thunkApi) => {
        const { rejectWithValue, dispatch } = thunkApi;

        dispatch(registrationActions.setData({ email, password }));

        try {
            const response = await api.post<registrationCredentials>('/auth/registration', {
                email,
                password,
            });

            dispatch(push(RoutesPaths.ResultSuccess));

            return response.data;
        } catch (e) {
            console.log('auth/registration/error', e);
            if (e.response.status !== 201) {
                dispatch(push(RoutesPaths.ResultError));
            }
            if (e.response.status === 409) {
                dispatch(push(RoutesPaths.ResultErrorUserExist));
            }

            return rejectWithValue(e.response.data);
        }
    },
);
