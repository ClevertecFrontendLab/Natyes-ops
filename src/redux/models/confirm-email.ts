import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { confirmEmailResponse } from '@types/api/confirm-email';
import { ResponseSchema } from '@types/api/response';
import { confirmEmail } from '@utils/api/auth/confirm-email';

const initialState: confirmEmailResponse = {
    data: null,
    success: false,
    isLoading: false,
    error: null,
};

const confirmEmailSlice = createSlice({
    name: 'confirmEmail',
    initialState,
    reducers: {
        setError: (state, { payload }: PayloadAction<string>) => {
            state.error = payload;
        },
        clearError: (state) => {
            state.error = null;
            state.success = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(confirmEmail.pending, (state) => {
                state.success = false;
                state.isLoading = true;
                state.error = null;
            })
            .addCase(confirmEmail.fulfilled, (state, { payload }) => {
                state.success = true;
                state.isLoading = false;
                state.data = payload;
            })
            .addCase(confirmEmail.rejected, (state, { payload }: PayloadAction<ResponseSchema>) => {
                state.success = false;
                state.isLoading = false;
                state.error = payload;
            });
    },
});

export const { actions: confirmEmailActions, reducer: confirmEmailReducer } = confirmEmailSlice;
