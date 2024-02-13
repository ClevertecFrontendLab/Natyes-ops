import { AppSize } from '@constants/app';
import { AppTheme } from '@constants/theme';
export type AppWidth = '1440' | '834' | '360';

export interface AppShema {
    size: AppSize;
    theme: AppTheme;
    navbar: boolean;
}
