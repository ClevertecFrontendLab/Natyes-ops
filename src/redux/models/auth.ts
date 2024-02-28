import { LOCAL_STORAGE_KEY } from '@constants/app';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authCredentials } from '@types/api/auth';
import { ResponseSchema } from '@types/api/response';
import { authUser } from '@utils/api/auth';

const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY) || '';
const initialState: authCredentials = {
    accessToken,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAccessToken: (state, action: PayloadAction<string>) => {
            state.accessToken = action.payload;
            localStorage.setItem(LOCAL_STORAGE_KEY, action.payload);
        },
        removeAccessToken: (state) => {
            state.accessToken = '';
            localStorage.removeItem(LOCAL_STORAGE_KEY);
        },
        setError: (state, { payload }: PayloadAction<string>) => {
            state.error = payload;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(authUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(authUser.fulfilled, (state, { payload }: PayloadAction<authCredentials>) => {
                state.isLoading = false;
                state.accessToken = payload.accessToken;
                localStorage.setItem(LOCAL_STORAGE_KEY, payload.accessToken);
            })
            .addCase(authUser.rejected, (state, { payload }: PayloadAction<ResponseSchema>) => {
                state.isLoading = false;
                state.error = payload;
            });
    },
});

export const { actions: authActions, reducer: authReducer } = authSlice;
