import { RoutesPaths } from '@constants/routes';
import { confirmEmailActions } from '@redux/models/confirm-email';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { checkEmailCredentials } from '@types/api/check-email';
import { confirmEmailSchema } from '@types/api/confirm-email';
import { push } from 'redux-first-history';

import { api } from '../api';

export const confirmEmail = createAsyncThunk<checkEmailSchema, checkEmailCredentials>(
    'auth/confirm-email',
    async ({ email, code }, thunkApi) => {
        const { rejectWithValue, dispatch } = thunkApi;

        try {
            const response = await api.post<confirmEmailSchema>('/auth/confirm-email', {
                email,
                code,
            });

            dispatch(push(RoutesPaths.ChangePassword));

            return response.data;
        } catch (e) {
            if (e.response.status !== 200) {
                dispatch(confirmEmailActions.setError(e.response.status));

                dispatch(push(RoutesPaths.ConfirmEmail));
            }

            return rejectWithValue(e.response.data);
        }
    },
);
