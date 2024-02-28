export interface RouteSchema {
    path: string;
    component: JSX.Element | string | null;
    routes?: RouteSchema[];
    authOnly?: boolean;
}
