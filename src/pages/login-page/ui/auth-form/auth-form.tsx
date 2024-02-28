import { GooglePlusOutlined } from '@ant-design/icons';
import { RoutesPaths } from '@constants/routes';
import { checkEmailActions } from '@redux/models/check-email';
import { authSchema } from '@types/api/auth';
import { StateSchema } from '@types/redux/state-schema';
import { authUser, registrationUser } from '@utils/api/auth';
import { checkEmail } from '@utils/api/auth/check-email';
import { confirmPassword, passwordHint, validatePassword } from '@utils/validate-form';
import { Button, Checkbox, Form, Input } from 'antd';
import { FC, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import cls from './auth-form.module.scss';

export const AuthForm: FC = ({ reg }) => {
    const [form] = Form.useForm();
    const [forgotPassword, setForgotPassword] = useState(false);
    const [checked, setChecked] = useState(false);

    const dispatch = useDispatch();
    const location = useSelector((store: StateSchema) => store?.router?.location?.pathname);
    const { data } = useSelector((store: StateSchema) => store?.registration);
    const { email, error } = useSelector((store: StateSchema) => store?.checkEmail);

    const registration = location === RoutesPaths.Registration;
    const forgot = location === RoutesPaths.ForgotPassword;

    const buttonTestId = registration && reg ? 'registration-submit-button' : 'login-submit-button';

    const regThunk = async ({ email, password }) =>
        await dispatch(registrationUser({ email, password }));

    useEffect(() => {
        if (data) regThunk(data);
        if (location === RoutesPaths.Auth && !error?.message && email) {
            console.log(email, error);
            dispatch(checkEmail({ email }));
        }
    }, [location]);

    const onSubmit = useCallback(
        async ({ email, password }: authSchema) => {
            console.log(email, password, checked);
            if (registration) {
                regThunk({ email, password });
            } else {
                await dispatch(authUser({ email, password, remember: checked }));
            }
        },
        [registration],
    );

    const onError = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const handleForgotPassword = async () => {
        const email = form.getFieldValue('email');
        if (email) {
            await dispatch(checkEmail({ email }));
        }
    };

    const validateEmail = (_, value: string) => {
        if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Za-z]{2,4}$/i.test(value)) {
            setForgotPassword(true);
            return Promise.reject();
        }
        setForgotPassword(false);
        return Promise.resolve();
    };

    return (
        <Form
            name='auth'
            form={form}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            onFinish={onSubmit}
            onFinishFailed={onError}
            autoComplete='off'
            size='large'
        >
            {registration && reg ? (
                <>
                    <Form.Item
                        name='email'
                        rules={[{ required: true, message: '' }, { valtrueidator: validateEmail }]}
                    >
                        <Input
                            data-test-id='registration-email'
                            placeholder='E-mail'
                            type='email'
                            addonBefore='e-mail:'
                        />
                    </Form.Item>
                    <Form.Item
                        name='password'
                        rules={[{ required: true, message: '' }, { validator: validatePassword }]}
                        wrapperCol={{ span: 24, className: cls['password-wrapper'] }}
                        help={passwordHint}
                        onChange={(value) => console.log(value)}
                    >
                        <Input.Password data-test-id='registration-password' placeholder='Пароль' />
                    </Form.Item>
                    <Form.Item
                        name='confirm-password'
                        rules={[{ required: true, message: '' }, confirmPassword]}
                    >
                        <Input.Password
                            data-test-id='registration-confirm-password'
                            placeholder='Повторите пароль'
                        />
                    </Form.Item>
                </>
            ) : (
                <>
                    <Form.Item
                        name='email'
                        rules={[{ required: true, message: '' }, { validator: validateEmail }]}
                    >
                        <Input
                            data-test-id='login-email'
                            placeholder='E-mail'
                            type='email'
                            addonBefore='e-mail:'
                            onChange={(e) => dispatch(checkEmailActions.setEmail(e.target.value))}
                        />
                    </Form.Item>
                    <Form.Item
                        name='password'
                        rules={[{ required: true, message: '' }, { validator: validatePassword }]}
                    >
                        <Input.Password data-test-id='login-password' placeholder='Пароль' />
                    </Form.Item>
                </>
            )}

            <Form.Item className={[cls.df]}>
                <Form.Item name='remember' noStyle>
                    <Checkbox
                        checked={checked}
                        onClick={() => setChecked(!checked)}
                        data-test-id='login-remember'
                    >
                        Запомнить меня
                    </Checkbox>
                </Form.Item>
                <Button
                    className={cls.forgot}
                    data-test-id='login-forgot-button'
                    disabled={forgotPassword}
                    type='link'
                    htmlType='button'
                    onClick={handleForgotPassword}
                >
                    Забыли пароль?
                </Button>
            </Form.Item>

            <Form.Item className={cls['btns-wrapper']} wrapperCol={{ offset: 0, span: 24 }}>
                <Button data-test-id={buttonTestId} type='primary' htmlType='submit'>
                    Войти
                </Button>
                <Button type='default' htmlType='button'>
                    <GooglePlusOutlined />
                    Войти через Google
                </Button>
            </Form.Item>
        </Form>
    );
};
