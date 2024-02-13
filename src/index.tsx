import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from '@redux/configure-store';

import 'antd/dist/antd.css';
import 'normalize.css';
import './constants/index.scss';

import ThemeProvider from '@components/providers/theme-provider';
import AppRouter from '@components/providers/app-router';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider>
                <AppRouter />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
);
