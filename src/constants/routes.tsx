import { ResultMessage } from '@components/ui/result/ui/result';
import { AuthForm, LoginPage } from '@pages/login-page';
import { ForgotPassword } from '@pages/login-page/ui/forgot-password/forgot-password';
import { MainPage } from '@pages/main-page';
import { NotFound } from '@pages/not-found';
import { RouteSchema } from '@types/routes';

export enum AppRoutes {
    Root = 'Root',
    Auth = 'Auth',
    AuthEmail = 'AuthEmail',
    ChangePassword = 'ChangePassword',
    Registration = 'Registration',
    ConfirmEmail = 'ConfirmEmail',

    ResultError = 'ResultError',
    ResultErrorLogin = 'ResultErrorLogin',
    ResultErrorUserExist = 'ResultErrorUserExist',
    ResultErrorChangePassword = 'ResultErrorChangePassword',
    ResultErrorEmailFound = 'ResultErrorEmailFound',
    ResultErrorEmailCheck = 'ResultErrorEmailCheck',
    ResultSuccess = 'ResultSuccess',
    ResultSuccessChangePassword = 'ResultSuccessChangePassword',

    ForgotPassword = 'ForgotPassword',
    ResetPassword = 'ResetPassword',

    Main = 'Main',
    Calendar = 'Calendar',
    Training = 'Training',
    Progress = 'Progress',
    Profile = 'Profile',
    NotFound = 'NotFound',
}

export const RoutesPaths: Record<AppRoutes, string> = {
    [AppRoutes.Root]: '/',
    [AppRoutes.Auth]: '/auth',
    [AppRoutes.ChangePassword]: '/auth/change-password',
    [AppRoutes.ConfirmEmail]: '/auth/confirm-email',
    [AppRoutes.AuthEmail]: '/auth/email',
    [AppRoutes.Registration]: '/auth/registration',

    [AppRoutes.ResultSuccess]: '/result/success',
    [AppRoutes.ResultSuccessChangePassword]: '/result/success-change-password',

    [AppRoutes.ResultError]: '/result/error',
    [AppRoutes.ResultErrorLogin]: '/result/error-login',

    [AppRoutes.ResultErrorUserExist]: '/result/error-user-exist',
    [AppRoutes.ResultErrorChangePassword]: '/result/error-change-password',
    [AppRoutes.ResultErrorEmailCheck]: '/result/error-check-email',
    [AppRoutes.ResultErrorEmailFound]: '/result/error-check-email-no-exist',
    [AppRoutes.ForgotPassword]: '/auth/forgot-password',
    [AppRoutes.ResetPassword]: '/auth/reset-password',

    [AppRoutes.Main]: '/main',
    [AppRoutes.Calendar]: '#',
    [AppRoutes.Training]: '#',
    [AppRoutes.Progress]: '#',
    [AppRoutes.Profile]: '#',

    [AppRoutes.NotFound]: '*',
};

export const routes: Record<AppRoutes, RouteSchema> = {
    [AppRoutes.Root]: {
        path: RoutesPaths.Root,
        component: <LoginPage />,
        routes: [
            {
                path: RoutesPaths.Auth,
                component: <AuthForm />,
            },
            {
                path: RoutesPaths.Registration,
                component: <AuthForm />,
            },
            {
                path: RoutesPaths.ChangePassword,
                component: <ForgotPassword />,
            },
            {
                path: RoutesPaths.ResultErrorLogin,
                component: (
                    <ResultMessage
                        type='warning'
                        title='Вход не выполнен'
                        description='Что-то пошло не так. Попробуйте еще раз'
                        link={RoutesPaths.Auth}
                        testId='login-retry-button'
                    />
                ),
            },
            {
                path: RoutesPaths.ResultSuccess,
                component: (
                    <ResultMessage
                        type='success'
                        title='Регистрация успешна'
                        description='Регистрация прошла успешно. Зайдите  в приложение, используя свои e-mail и пароль.'
                        button='Войти'
                        testId='registration-enter-button'
                    />
                ),
            },
            {
                path: RoutesPaths.ResultErrorUserExist,
                component: (
                    <ResultMessage
                        type='error'
                        link={RoutesPaths.Registration}
                        title='Данные не сохранились'
                        description='Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому e-mail.'
                        button='Назад к регистрации'
                        testId='registration-back-button'
                    />
                ),
            },
            {
                path: RoutesPaths.ResultError,
                component: (
                    <ResultMessage
                        type='error'
                        link={RoutesPaths.Registration}
                        title='Данные не сохранились'
                        description='Что-то пошло не так и ваша регистрация  не завершилась. Попробуйте ещё раз.'
                        button='Повторить'
                        registerDataClear
                        testId='registration-retry-button'
                    />
                ),
            },
            {
                path: RoutesPaths.ResultErrorEmailCheck,
                component: (
                    <ResultMessage
                        type='error_server'
                        back
                        link={RoutesPaths.Auth}
                        title='Что-то пошло не так'
                        description='Произошла ошибка, попробуйте отправить форму ещё раз.'
                        button='Назад'
                        testId='check-back-button'
                    />
                )
            },
            {
                path: RoutesPaths.ResultErrorEmailFound,
                component: (
                    <ResultMessage
                        type='error'
                        title='Такой e-mail не зарегистрирован'
                        description='Мы не нашли в базе вашего e-mail. Попробуйте  войти с другим e-mail.'
                        link={RoutesPaths.Auth}
                        button='Попробовать снова'
                        testId='check-retry-button'
                    />
                )
            },
            {
                path: RoutesPaths.ConfirmEmail,
                component: (
                    <ResultMessage
                        confirm
                        type='info'
                        title = 'Введите код  для восстановления аккауант'
                    />
                ),
            },
            {
                path: RoutesPaths.ResultErrorChangePassword,
                component: (
                    <ResultMessage
                        type='error'
                        title='Данные не сохранились'
                        description='Что-то пошло не так. Попробуйте ещё раз'
                        link={RoutesPaths.ChangePassword}
                        testId='change-retry-button'
                    />
                )
            },
            {
                path: RoutesPaths.ResultSuccessChangePassword,
                component: (
                    <ResultMessage
                        type='success'
                        title='Пароль успешно изменен'
                        description='Теперь можно войти в аккаунт, используя  свой логин и новый пароль'
                        testId='change-entry-button'
                    />
                )
            },
        ],
    },
    [AppRoutes.AuthEmail]: {
        path: RoutesPaths.AuthEmail,
        component: 'auth-email'
    },
    [AppRoutes.Main]: {
        path: RoutesPaths.Main,
        component: <MainPage />,
        authOnly: true,
    },
    [AppRoutes.Calendar]: {
        path: RoutesPaths.Calendar,
        component: 'calendar',
        authOnly: true,
    },
    [AppRoutes.Training]: {
        path: RoutesPaths.Training,
        component: 'training',
        authOnly: true,
    },
    [AppRoutes.Progress]: {
        path: RoutesPaths.Progress,
        component: 'progress',
        authOnly: true,
    },
    [AppRoutes.Profile]: {
        path: RoutesPaths.Profile,
        component: 'profile',
        authOnly: true,
    },

    [AppRoutes.NotFound]: {
        path: RoutesPaths.NotFound,
        component: <NotFound />,
        authOnly: true,
    },
};
