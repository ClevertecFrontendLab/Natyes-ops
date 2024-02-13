import { routes } from '@constants/routes';
import { Suspense, memo, useCallback } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Loader } from '@components/ui/loader';

const AppRouter = () => {
    const wrapper = useCallback((route) => {
        const LoadComponent = <Suspense fallback={<Loader />}>{route.component}</Suspense>;

        return <Route key={route.path} path={route.path} element={LoadComponent} />;
    }, []);

    return (
        <HashRouter>
            <Routes>{Object.values(routes).map(wrapper)}</Routes>
        </HashRouter>
    );
};

export default memo(AppRouter);
