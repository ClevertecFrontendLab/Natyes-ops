import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { checkEmailCredentials } from '@types/api/check-email';
import { ResponseSchema } from '@types/api/response';
import { checkEmail } from '@utils/api/auth/check-email';

const initialState: checkEmailCredentials = {
    email: '',
    success: false,
    isLoading: false,
    error: null,
};

const checkEmailSlice = createSlice({
    name: 'checkEmail',
    initialState,
    reducers: {
        setEmail: (state, { payload }: PayloadAction<string>) => {
            state.email = payload;
        },
        clearError: (state) => {
            state.error = null;
            state.success = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(checkEmail.pending, (state) => {
                state.success = false;
                state.isLoading = true;
                state.error = null;
            })
            .addCase(checkEmail.fulfilled, (state, { payload }) => {
                state.success = true;
                state.isLoading = false;
                state.email = payload.email;
            })
            .addCase(checkEmail.rejected, (state, { payload }: PayloadAction<ResponseSchema>) => {
                state.success = false;
                state.isLoading = false;
                state.error = payload;
            });
    },
});

export const { actions: checkEmailActions, reducer: checkEmailReducer } = checkEmailSlice;
