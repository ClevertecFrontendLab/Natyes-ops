/* eslint-disable no-irregular-whitespace */
import { CustomLayout } from '@components/ui/layout';
import { Sidebar } from '@components/ui/sidebar/ui/sidebar';
import { appActions } from '@redux/models/app';
import { getAppSize } from '@utils/get-app-size';
import { Button, Card, Layout, List,Space, Typography } from 'antd';
import { FC } from 'react';

import { ContentMain } from '../content-main/index.tsx';
import { FooterMain } from '../footer-main/index.tsx';
import { HeaderMain } from '../header-main/index.tsx';
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
