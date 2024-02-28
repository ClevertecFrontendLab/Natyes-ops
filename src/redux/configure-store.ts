import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from '@types/redux/state-schema';

import { createReducerManager } from './config/reducer-manager';
import { appReducer } from './models/app';
import { authReducer } from './models/auth';
import { changePasswordReducer } from './models/change-password';
import { checkEmailReducer } from './models/check-email';
import { confirmEmailReducer } from './models/confirm-email';
import { createReduxHistory, routerMiddleware, routerReducer } from './models/history';
import { registrationReducer } from './models/registration';

const mainReducer: ReducersMapObject<StateSchema> = {
    app: appReducer,
    router: routerReducer,
    auth: authReducer,
    registration: registrationReducer,
    checkEmail: checkEmailReducer,
    confirmEmail: confirmEmailReducer,
    changePassword: changePasswordReducer,
};

const reducerManager = createReducerManager(mainReducer);

export const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware),
});

store.reducerManager = reducerManager;

export const history = createReduxHistory(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
