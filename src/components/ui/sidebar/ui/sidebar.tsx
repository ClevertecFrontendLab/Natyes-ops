import { AppSize, LOCAL_STORAGE_KEY } from '@constants/app';
import { RoutesPaths } from '@constants/routes';
import { SidebarItems } from '@constants/sidebar';
import Exit from '@public/exit.svg?react';
import LogoFull from '@public/logo_full.svg?react';
import { authActions } from '@redux/models/auth';
import { Button, Menu, Space } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import { FC, memo, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'redux-first-history';

import cls from './sidebar.module.scss';
import { SidebarColapsed } from './sidebar-colapsed';

export const Sidebar: FC = memo((size: string) => {
    const dispatch = useDispatch();
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

    const loginOut = () => {
        dispatch(authActions.removeAccessToken());
        dispatch(push(RoutesPaths.Auth));
    };

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
                <Button type='text' icon={btnIcon} className={exitClass} onClick={loginOut}>
                    {btnTitle}
                </Button>
            </Space>
        </Sider>
    );
});
