import React from 'react';
import { SliderColapsedSchema } from '@types/sidebar.ts';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { AppSize } from '@constants/app';

import cls from './sidebar-collapsed.module.scss';

export const SidebarColapsed = ({ size, collapsed, onClick }: SliderColapsedSchema) => {
    const Icon = collapsed ? MenuUnfoldOutlined : MenuFoldOutlined;

    const testID = size.size === AppSize.small ? 'sider-switch-mobile' : 'sider-switch';

    const className = collapsed
        ? [cls.trapezoid, cls['collapsed'], 'trigger'].join(' ')
        : [cls.trapezoid, 'trigger'].join(' ');

    return <Icon data-test-id={testID} className={className} onClick={() => onClick(!collapsed)} />;
};
