import { RoutesPaths } from '@constants/routes';
import ServerError from '@public/result/500.svg?react';
import ErrorIcon from '@public/result/error.svg?react';
import InfoIcon from '@public/result/info.svg?react';
import SuccessIcon from '@public/result/success.svg?react';
import WarningIcon from '@public/result/warning.svg?react';
import { authActions } from '@redux/models/auth';
import { changePasswordActions } from '@redux/models/change-password';
import { registrationActions } from '@redux/models/registration';
import { confirmEmail } from '@utils/api/auth/confirm-email';
import { Button, Typography } from 'antd';
import { FC, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import VerificationInput from 'react-verification-input';
import { push } from 'redux-first-history';
import { useNavigate } from 'react-router-dom';

import cls from './result.module.scss';

const { Title, Paragraph, Text } = Typography;

enum ResultType {
    success = 'success',
    info = 'info',
    warning = 'warning',
    error = 'error',
    error_server = 'error_server',
}

const ResultIcon: Record<ResultType, JSX.Element> = {
    success: <SuccessIcon />,
    info: <InfoIcon />,
    warning: <WarningIcon />,
    error: <ErrorIcon />,
    error_server: <ServerError />,
};

interface Props {
    confirm?: boolean;
    type: ResultType;
    title: string;
    description: string;
    link?: string;
    button?: string;
}

export const ResultMessage: FC = ({
    confirm = false,
    type,
    title,
    description,
    link = RoutesPaths.Auth,
    button = 'Повторить',
    testId = '',
    back,
}: Props) => {
    const dispatch = useDispatch();
    const { email } = useSelector((state) => state?.checkEmail);
    const {error} = useSelector((state) => state?.confirmEmail);
    const [code, setCode] = useState('');

    const onClick = () => {
        dispatch(authActions.clearError());
        dispatch(registrationActions.clearError());
        if (registrationActions) {
            dispatch(registrationActions.setData(''));
        }
        if (!back) {
            dispatch(push(link));
        } else {
            history.back();
        }
    };

    const confirmEmailHandler = async (code: string) => {
        await dispatch(confirmEmail({ email, code }));
    };

   useEffect(() => {
     if(error) {
       setCode('');
     }
   }, [error])


    const clsInput = () => error?.statusCode ? [cls.character, cls.error]: cls.character;

    return (
        <div className={cls.result}>
            {ResultIcon[type]}
            <Title level={3} className={cls.title}>
                {title}
            </Title>
            {description && <Paragraph className={cls.description}>{description}</Paragraph>}
            {confirm ? (
                <>
                    <Paragraph className={cls.description}>
                        Мы отправили вам на e-mail <Text strong>{email} </Text> шестизначный код.
                        Введите его в поле ниже.Мы не нашли в базе вашего e-mail. Попробуйте  войти
                        с другим e-mail.
                    </Paragraph>
                    <VerificationInput
                        inputProps={{ 'data-test-id': 'verification-input' }}
                        value={code}
                        validChars='0-9'
                        placeholder=''
                        classNames={{
                            container: cls.container_input,
                            character: clsInput(),
                        }}
                        onComplete={confirmEmailHandler}
                        onChange={((value) => setCode(value))}
                    />
                    <Paragraph className={cls.description}>
                        Не пришло письмо? Проверьте папку Спам.
                    </Paragraph>
                </>
            ) : (
                <Button
                    data-test-id={testId}
                    onClick={onClick}
                    size='large'
                    type='primary'
                    className={cls.button}
                >
                    {button}
                </Button>
            )}
        </div>
    );
};
