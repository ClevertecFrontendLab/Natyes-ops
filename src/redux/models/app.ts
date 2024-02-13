import { AppSize } from '@constants/app';
import { AppTheme } from '@constants/theme';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppShema } from '@types/app-shema';

const initialState: AppShema = {
    size: AppSize.large,
    theme: AppTheme.LIGHT,
    navbar: true,
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAppSize: (state, { payload }: PayloadAction<AppSize>) => {
            state.size = payload;
        },
        setAppTheme: (state, { payload }: PayloadAction<AppTheme>) => {
            state.theme = payload;
        },
        setNavbar: (state, { payload }: PayloadAction<boolean>) => {
            state.navbar = payload;
        },
    },
});

export const { actions: appActions, reducer: appReducer } = appSlice;
