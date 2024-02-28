import { RoutesPaths } from '@constants/routes';
import { changePasswordActions } from '@redux/models/change-password';
import { changePasswordSchema } from '@types/api/auth';
import { changePassword as api } from '@utils/api/auth/change-password';
import { confirmPassword, passwordHint, validatePassword } from '@utils/validate-form';
import { Button, Form, Input } from 'antd';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import clsPage from '../page/login-page.module.scss';
import cls from './forgot-password.module.scss';

export const ForgotPassword: FC = () => {
    const dispath = useDispatch();
    const { error, data } = useSelector((store: StateSchema) => store?.changePassword);

    const onSubmit = async ({ password, confirmPassword }: changePasswordSchema) => {
        dispath(changePasswordActions.setData({ password, confirmPassword }));
        await dispath(api({ password, confirmPassword }));
    };

    useEffect(() => {
        console.log(error, data);

        if (error) {
            dispath(api(data));
        }
    }, [error]);

    return (
        <div className={clsPage.container}>
            <h3 className={cls.title}>Восстановление пароля</h3>
            <Form
                name='password_reset'
                onFinish={onSubmit}
                labelCol={{ span: 0 }}
                wrapperCol={{ span: 24 }}
                size='large'
            >
                <Form.Item
                    name='password'
                    rules={[{ required: true, message: '' }, { validator: validatePassword }]}
                    help={passwordHint}
                >
                    <Input.Password placeholder='Новый пароль' data-test-id='change-password' />
                </Form.Item>

                <Form.Item
                    name='confirmPassword'
                    dependencies={['password']}
                    rules={[{ required: true, message: '' }, confirmPassword]}
                >
                    <Input.Password
                        placeholder='Повторите пароль'
                        data-test-id='change-confirm-password'
                    />
                </Form.Item>

                <Form.Item className={cls['btns-wrapper']} wrapperCol={{ offset: 0, span: 24 }}>
                    <Button data-test-id='change-submit-button' type='primary' htmlType='submit'>
                        Сохранить
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
