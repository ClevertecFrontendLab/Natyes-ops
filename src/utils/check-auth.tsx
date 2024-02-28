import { RoutesPaths } from '@constants/routes';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'redux-first-history';

export const CheckAuth = ({ children }) => {
    const dispatch = useDispatch();
    const { accessToken } = useSelector((store) => store?.auth);

    console.log('children', children, '\naccessToken', accessToken);

    if (!accessToken) {
        dispatch(push(RoutesPaths.Auth));
    }

    if (accessToken) {
        dispatch(push(RoutesPaths.Main));
    }

    return children;
};
