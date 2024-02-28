import { CustomLayout } from '@components/ui/layout';
import { Loader } from '@components/ui/loader';
import { RoutesPaths } from '@constants/routes';
import logo from '@public/logo_full.svg';
import { Tabs } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { push } from 'redux-first-history';

import { AuthForm } from '../auth-form/auth-form';
import { ForgotPassword } from '../forgot-password/forgot-password';
import cls from './login-page.module.scss';

const items = [
    {
        label: 'Авторизация',
        children: <AuthForm />,
        key: RoutesPaths.Auth,
    },
    {
        label: 'Регистрация',
        children: <AuthForm reg />,
        key: RoutesPaths.Registration,
    },
];

const loginRoutes = [RoutesPaths.Auth, RoutesPaths.Registration, RoutesPaths.Root];

const LoginPage = () => {
    const dispatch = useDispatch();
    const { pathname } = useSelector((store: StateSchema) => store?.router?.location);

    const { auth, registration } = useSelector((store: StateSchema) => store);

    const changePassword = pathname === RoutesPaths.ChangePassword;

    const handleTabChange = (key: string) => {
        dispatch(push(key));
    };

    useEffect(() => {
        if (auth?.accessToken || (pathname === RoutesPaths.Auth && auth?.accessToken)) {
            dispatch(push(RoutesPaths.Main));
        }

        if (pathname === RoutesPaths.Root) {
            dispatch(push(RoutesPaths.Auth));
        }

        if (pathname === RoutesPaths.Registration) {
            dispatch(push(RoutesPaths.Registration));
        }
    }, [auth?.accessToken, dispatch, pathname]);

    console.log('login page', loginRoutes.includes(pathname), '\npathname', pathname);

    return (
        <CustomLayout className={cls.layout}>
            {(auth?.isLoading || registration?.isLoading) && <Loader />}
            {loginRoutes.includes(pathname) ? (
                <div className={cls.container}>
                    {changePassword ? (
                        <ForgotPassword />
                    ) : (
                        <>
                            <img className={cls.logo} src={logo} alt='logo' />
                            <Tabs
                                activeKey={pathname}
                                defaultActiveKey={RoutesPaths.Auth}
                                items={items}
                                onChange={handleTabChange}
                                className={cls.tabs}
                            />
                        </>
                    )}
                </div>
            ) : (
                <Outlet />
            )}
        </CustomLayout>
    );
};

export default LoginPage;
