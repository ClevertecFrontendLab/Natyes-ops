import { RoutesPaths } from '@constants/routes';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { changePasswordResponse, changePasswordSchema } from '@types/api/change-password';
import { push } from 'redux-first-history';

import { changePasswordActions } from '../../../redux/models/change-password';
import { api } from '../api';

export const changePassword = createAsyncThunk<changePasswordSchema, changePasswordResponse>(
    'auth/change-password',
    async ({ password, confirmPassword }, thunkApi) => {
        const { rejectWithValue, dispatch } = thunkApi;

        try {
            const response = await api.post<changePasswordSchema>('/auth/change-password', {
                password,
                confirmPassword,
            });

            dispatch(push(RoutesPaths.ResultSuccessChangePassword));

            return response.data;
        } catch (e) {
            if (e.response.status !== 200) {
                dispatch(changePasswordActions.setError(e.response.status));
                dispatch(push(RoutesPaths.ResultErrorChangePassword));
            }
            return rejectWithValue(e.response.data);
        }
    },
);
