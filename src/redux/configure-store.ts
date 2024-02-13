import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateSchema } from '@types/redux/state-schema';
import { appReducer } from './models/app';
import { createReducerManager } from './config/reducer-manager';

const mainReducer: ReducersMapObject<StateSchema> = {
    app: appReducer,
};

const reducerManager = createReducerManager(mainReducer);

export const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

store.reducerManager = reducerManager;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
