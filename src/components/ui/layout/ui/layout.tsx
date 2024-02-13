import { Layout, Typography, Button } from 'antd';
import { FC } from 'react';
import cls from './layout.module.scss';
import { LayoutProps } from '@types/components/layout';

export const CustomLayout: FC = ({ children, className }: LayoutProps) => {
    return <Layout className={[cls.layout, className]}>{children}</Layout>;
};
