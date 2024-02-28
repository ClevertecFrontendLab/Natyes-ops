import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { changePasswordResponse } from '@types/api/change-password';
import { ResponseSchema } from '@types/api/response';
import { changePassword } from '@utils/api/auth/change-password';

const initialState: changePasswordResponse = {
    data: null,
    success: false,
    isLoading: false,
    error: null,
};

const changePasswordSlice = createSlice({
    name: 'changePassword',
    initialState,
    reducers: {
        setData: (state, { payload }: PayloadAction<string>) => {
            state.data = payload;
        },
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
            .addCase(changePassword.pending, (state) => {
                state.success = false;
                state.isLoading = true;
                state.error = null;
            })
            .addCase(changePassword.fulfilled, (state) => {
                state.success = true;
                state.isLoading = false;
            })
            .addCase(
                changePassword.rejected,
                (state, { payload }: PayloadAction<ResponseSchema>) => {
                    state.success = false;
                    state.isLoading = false;
                    state.error = payload;
                },
            );
    },
});

export const { actions: changePasswordActions, reducer: changePasswordReducer } =
    changePasswordSlice;
