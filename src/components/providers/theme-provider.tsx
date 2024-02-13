import { AppTheme, LOCAL_STORAGE_THEME } from '@constants/theme';
import { ThemeProviderSchema, ThemeSchema } from '@types/theme-schema';
import { FC, createContext, useMemo, useState } from 'react';

export const ThemeContext = createContext<ThemeSchema>({});

const init = (localStorage.getItem(LOCAL_STORAGE_THEME) as AppTheme) || AppTheme.LIGHT;

const ThemeProvider: FC<ThemeProviderSchema> = (props) => {
    const { children, initTheme } = props;

    const [theme, setTheme] = useState<AppTheme>(initTheme || init);

    const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
