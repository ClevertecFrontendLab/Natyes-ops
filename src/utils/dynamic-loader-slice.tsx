import { useEffect, FC } from 'react';
import { DynamicLoader } from '@types/redux/dynamic-loader';
import { useDispatch, useStore } from 'react-redux';

export const DynamicLoaderSlice: FC<DynamicLoader> = (props) => {
    const { children, reducers, removeAfterUnmount = false } = props;

    const store = useStore();
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${name}` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]) => {
                    store.reducerManager.remove(name);
                    dispatch({ type: `@DELETE ${name}` });
                });
            }
        };
    }, []);

    return children;
};
