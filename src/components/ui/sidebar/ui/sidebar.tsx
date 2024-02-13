import Sider from 'antd/lib/layout/Sider';
import { FC, useState, useMemo, memo } from 'react';
import { Menu, Button, Space } from 'antd';
import { SidebarItems } from '@constants/sidebar';
import { SidebarColapsed } from './sidebar-colapsed';
import { AppSize } from '@constants/app';

import LogoFull from '@public/logo_full.svg?react';
import Exit from '@public/exit.svg?react';

import cls from './sidebar.module.scss';

export const Sidebar: FC = memo((size: string) => {
    const checkCollapsed = size === AppSize.small ? true : false;

    const [collapsed, setCollapsed] = useState(checkCollapsed);

    const width = size.size === AppSize.small ? 106 : 208;
    const collapsedWidth = size.size === AppSize.small ? 0 : 64;
    const padding = size.size === AppSize.small ? 8 : 16;

    const logoClass = collapsed ? [cls.logo, cls.small].join(' ') : cls.logo;

    const menuClass = collapsed
        ? [cls.menu, cls['collapsed'], 'menu'].join(' ')
        : [cls.menu, 'menu'].join(' ');

    const exitClass = collapsed
        ? [cls['exit-button'], cls['exit-collapsed']].join(' ')
        : cls['exit-button'];

    const btnIcon = size.size !== AppSize.small ? <Exit /> : null;

    const menuItemsSmall = useMemo(() => {
        return SidebarItems.map(({ label, path, className }) => ({ label, path, className }));
    }, []);

    const menuItems = size.size === AppSize.small ? menuItemsSmall : SidebarItems;

    const btnTitle = !collapsed ? 'Выход' : '';

    return (
        <Sider
            className={cls.sidebar}
            width={width}
            breakpoint='lg'
            collapsedWidth={collapsedWidth}
            collapsed={collapsed}
            trigger={null}
        >
            <SidebarColapsed size={size} collapsed={collapsed} onClick={setCollapsed} />
            <div className={logoClass}>
                <LogoFull />
            </div>
            <Space className={cls.space} direction='vertical'>
                <Menu
                    inlineIndent={padding}
                    mode='inline'
                    inlineCollapsed={collapsed}
                    className={menuClass}
                    items={menuItems}
                />
                <Button type='text' icon={btnIcon} className={exitClass}>
                    {btnTitle}
                </Button>
            </Space>
        </Sider>
    );
});
