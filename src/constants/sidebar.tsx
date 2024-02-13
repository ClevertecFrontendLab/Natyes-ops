import { CalendarTwoTone, HeartFilled, IdcardOutlined, TrophyFilled } from '@ant-design/icons';
import { routes } from './routes';
import MenuItem from 'antd/lib/menu/MenuItem';

export const SidebarItems: MenuItem[] = [
    {
        icon: <CalendarTwoTone />,
        label: 'Календарь',
        path: routes.Calendar['path'],
        className: 'sidebar-item',
    },
    {
        icon: <HeartFilled />,
        label: 'Тренировки',
        path: routes.Training['path'],
    },
    {
        icon: <TrophyFilled />,
        label: 'Достижения',
        path: routes.Progress['path'],
    },
    {
        icon: <IdcardOutlined twoToneColor={['#061178', '#061178']} />,
        label: 'Профиль',
        path: routes.Profile['path'],
    },
];
