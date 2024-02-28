import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { registrationCredentials } from '@types/api/registration';
import { ResponseSchema } from '@types/api/response';
import { registrationUser } from '@utils/api/auth/registration';

const initialState: registrationCredentials = {
    data: null,
    success: false,
    isLoading: false,
    error: null,
};

const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<registrationCredentials['data']>) => {
            state.data = action.payload;
        },
        clearError: (state) => {
            state.error = null;
            state.success = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registrationUser.pending, (state) => {
                state.success = false;
                state.isLoading = true;
                state.error = null;
            })
            .addCase(
                registrationUser.fulfilled,
                (state, { payload }: PayloadAction<authCredentials>) => {
                    state.data = null;
                    state.success = true;
                    state.isLoading = false;
                },
            )
            .addCase(
                registrationUser.rejected,
                (state, { payload }: PayloadAction<ResponseSchema>) => {
                    state.success = false;
                    state.isLoading = false;
                    state.error = payload;
                },
            );
    },
});

export const { actions: registrationActions, reducer: registrationReducer } = registrationSlice;
