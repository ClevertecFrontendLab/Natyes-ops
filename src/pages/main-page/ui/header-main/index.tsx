import { FC, memo } from 'react';
import { Space, Typography, Button } from 'antd';
import { CustomHeader } from '@components/ui/header';
import { SettingOutlined } from '@ant-design/icons';
import { AppSize } from '@constants/app';

const { Title, Paragraph } = Typography;

import cls from './header-main.module.scss';

export const HeaderMain: FC = memo(({ widthClass }: string) => {
    const viewBtnIcon = widthClass === AppSize.large ? <SettingOutlined /> : null;

    const btnType = widthClass === AppSize.large || widthClass === AppSize.medium ? true : false;

    return (
        <CustomHeader className={cls.header}>
            <Space className={cls['space-header']} align='start' size='20'>
                <Title>
                    Приветствуем тебя в CleverFit — приложении,
                    <Paragraph className={cls.paragraph}>
                         которое поможет тебе добиться своей мечты!
                    </Paragraph>
                </Title>
                {btnType ? (
                    <Button type='text' className={cls.button} icon={viewBtnIcon}>
                        Настройки
                    </Button>
                ) : (
                    <Button
                        type='default'
                        shape='circle'
                        className={cls.button}
                        icon={<SettingOutlined />}
                    />
                )}
            </Space>
        </CustomHeader>
    );
});
