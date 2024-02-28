import { RoutesPaths } from '@constants/routes';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { checkEmailCredentials, checkEmailSchema } from '@types/api/check-email';
import { push } from 'redux-first-history';

import { api } from '../api';

export const checkEmail = createAsyncThunk<checkEmailSchema, checkEmailCredentials>(
    'auth/check-email',
    async ({ email }, thunkApi) => {
        const { rejectWithValue, dispatch } = thunkApi;

        try {
            const response = await api.post<checkEmailCredentials>('/auth/check-email', {
                email,
            });

            dispatch(push(RoutesPaths.ConfirmEmail));

            return response.data;
        } catch (e) {
            const { status, data } = e.response;

            if ((status == 404 && data.message == 'Email не найден') || status == 409) {
                dispatch(push(RoutesPaths.ResultErrorEmailCheck));
            }
            if (status === 404) {
                dispatch(push(RoutesPaths.ResultErrorEmailFound));
            }

            return rejectWithValue(e.response.data);
        }
    },
);
