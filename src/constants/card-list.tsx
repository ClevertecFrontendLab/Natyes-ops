import { HeartFilled, IdcardOutlined, CalendarOutlined } from '@ant-design/icons';
import { routes } from './routes';

export const CardListItems: ListItem[] = [
    {
        title: 'Расписать тренировки',
        icon: <HeartFilled />,
        label: 'Тренировки',
        path: routes.Training['path'],
    },
    {
        title: 'Назначить календарь',
        icon: <CalendarOutlined />,
        label: 'Календарь',
        path: routes.Progress['path'],
    },
    {
        title: 'Заполнить профиль',
        icon: <IdcardOutlined />,
        label: 'Профиль',
        path: routes.Profile['path'],
    },
];
