/* eslint-disable no-irregular-whitespace */
import { FC } from 'react';
import { Space, Layout, Typography, Button, Card, List } from 'antd';

import { appActions } from '@redux/models/app';

import { CustomLayout } from '@components/ui/layout';
import { HeaderMain } from '../header-main/index.tsx';
import { ContentMain } from '../content-main/index.tsx';
import { FooterMain } from '../footer-main/index.tsx';

import { Sidebar } from '@components/ui/sidebar/ui/sidebar';
import { getAppSize } from '@utils/get-app-size';

import cls from './main-page.module.scss';

const MainPage: FC = () => {
    const { _, widthClass } = getAppSize();

    return (
        <CustomLayout>
            <Sidebar size={widthClass} />
            <Layout className={`${cls.layout} site-layout`}>
                <HeaderMain widthClass={widthClass} />
                <ContentMain widthClass={widthClass} />
                <FooterMain />
            </Layout>
        </CustomLayout>
    );
};

export default MainPage;
