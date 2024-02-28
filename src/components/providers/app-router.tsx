import { Loader } from '@components/ui/loader';
import { routes } from '@constants/routes';
import { history } from '@redux/configure-store';
import { RouteSchema } from '@types/routes';
import { CheckAuth } from '@utils/check-auth';
import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HistoryRouter } from 'redux-first-history/rr6';

const AppRouter = () => {
    const WrapperWithOutlet = useCallback((route: RouteSchema) => {
        const LoadComponent = (route: RouteSchema) => (
            <Suspense fallback={<Loader />}>{route.component}</Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route?.authOnly ? (
                        <CheckAuth>{LoadComponent(route)}</CheckAuth>
                    ) : (
                        LoadComponent(route)
                    )
                }
            >
                {route.routes &&
                    route.routes.map((subRoute) => (
                        <Route
                            index={route.path === subRoute.path}
                            key={subRoute.path}
                            path={subRoute.path}
                            element={
                                route?.authOnly ? (
                                    <CheckAuth>{LoadComponent(subRoute)}</CheckAuth>
                                ) : (
                                    LoadComponent(subRoute)
                                )
                            }
                        />
                    ))}
            </Route>
        );
    }, []);

    return (
        <HistoryRouter history={history}>
            <Routes>{Object.values(routes).map((route) => WrapperWithOutlet(route))}</Routes>
        </HistoryRouter>
    );
};

export default memo(AppRouter);
