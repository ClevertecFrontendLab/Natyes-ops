import { MainPage } from '@pages/main-page';
import { NotFound } from '@pages/not-found';

export enum AppRoutes {
    Main = 'Main',
    Calendar = 'Calendar',
    Training = 'Training',
    Progress = 'Progress',
    Profile = 'Profile',

    NotFound = 'NotFound',
}

const RoutesPaths: Record<AppRoutes, string> = {
    [AppRoutes.Main]: '/',
    [AppRoutes.Calendar]: '#',
    [AppRoutes.Training]: '#',
    [AppRoutes.Progress]: '#',
    [AppRoutes.Profile]: '#',

    [AppRoutes.NotFound]: '*',
};

export const routes: Record<AppRoutes, RoutesPaths> = {
    [AppRoutes.Main]: {
        path: RoutesPaths.Main,
        component: <MainPage />,
    },
    [AppRoutes.Calendar]: {
        path: RoutesPaths.Calendar,
        component: 'calendar',
    },
    [AppRoutes.Training]: {
        path: RoutesPaths.Training,
        component: 'training',
    },
    [AppRoutes.Progress]: {
        path: RoutesPaths.Progress,
        component: 'progress',
    },
    [AppRoutes.Profile]: {
        path: RoutesPaths.Profile,
        component: 'profile',
    },

    [AppRoutes.NotFound]: {
        path: RoutesPaths.NotFound,
        component: <NotFound />,
    },
};
