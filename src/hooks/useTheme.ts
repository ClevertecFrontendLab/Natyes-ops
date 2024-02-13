import { ThemeContext } from '@components/theme-provider';
import { AppTheme, LOCAL_STORAGE_THEME } from '@constants/theme';
import { useThemaSchema } from '@types/theme-schema';
import { useContext } from 'react';

export function useTheme(): useThemaSchema {
    const { theme, setTheme } = useContext(ThemeContext);

    const changeTheme = () => {
        const changedTheme = theme === AppTheme.DARK ? AppTheme.LIGHT : AppTheme.DARK;

        setTheme?.(changedTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME, changedTheme);
    };

    return {
        changeTheme,
        theme: theme || AppTheme.LIGHT,
    };
}
