import React, { FC } from 'react';
import { HeaderProps } from '@types/components/header';

import { Layout, Space } from 'antd';

import { Breadcrumds } from './breadcrumbs';
import cls from './header.module.scss';

const { Header } = Layout;

export const CustomHeader: FC = ({ children }: HeaderProps) => {
    return (
        <Header className={`${cls.header} site-layoutbackground`}>
            <Breadcrumds />
            {children}
        </Header>
    );
};
