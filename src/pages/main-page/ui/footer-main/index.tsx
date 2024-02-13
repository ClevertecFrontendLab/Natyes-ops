import { FC } from 'react';
import { Layout, Card } from 'antd';
import { Link } from 'react-router-dom';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';
import cls from './footer-main.module.scss';

const { Footer } = Layout;

export const FooterMain: FC = () => {
    return (
        <Footer className={cls.footer}>
            <Link href='#'>Смотреть отзывы</Link>
            <Card
                title={
                    <div className={cls['footer-card']}>
                        <Link to='/'>Скачать на телефон</Link>
                        <span>Доступно в PRO-тарифе</span>
                    </div>
                }
            >
                <div className={cls['footer-card-body']}>
                    <Link to='/'>
                        <AndroidFilled />
                        Android OS
                    </Link>
                    <Link to='/'>
                        <AppleFilled />
                        Apple iOS
                    </Link>
                </div>
            </Card>
        </Footer>
    );
};
