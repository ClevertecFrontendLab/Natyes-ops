import { RoutesPaths } from '@constants/routes';
import { authActions } from '@redux/models/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { authCredentials, authSchema } from '@types/api/auth';
import { push } from 'redux-first-history';

import { api } from '../api';

export const authUser = createAsyncThunk<authSchema, authCredentials>(
    'auth/login',
    async ({ email, password, remember }, thunkApi) => {
        const { dispatch, rejectWithValue } = thunkApi;

        try {
            const response = await api.post<authCredentials>('/auth/login', {
                email,
                password,
            });

            if (!response.data) {
                return thunkApi.rejectWithValue(response.data);
            }

            if (remember) {
                console.log(remember, 'remember');
                dispatch(authActions.setAccessToken(response.data.accessToken));
            }

            dispatch(push(RoutesPaths.Main));

            return response.data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    },
);
