import { AppTheme } from '@constants/theme';
import { ReactNode } from 'react';

export interface ThemeSchema {
    theme?: AppTheme;
    setTheme?: (theme: AppTheme) => void;
}

export interface ThemeProviderSchema {
    children: ReactNode;
    initTheme?: AppTheme;
}

export interface useThemaSchema {
    theme: AppTheme;
    changeTheme: () => void;
}
