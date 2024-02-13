import { combineReducers } from 'redux';
import { ReducersMapObject, UnknownAction, Reducer } from '@reduxjs/toolkit';
import { StateSchema } from '@types/redux/state-schema';
import { StateSchemaKeys } from '@types/redux/manager-schema';

export function createReducerManager(
    initialReducers: ReducersMapObject<StateSchema>,
): ReducerManager {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers);

    let keysToRemove: Array<StateSchemaKeys> = [];

    return {
        getReducerMap: () => reducers,
        reduce: (state: StateSchema, action: UnknownAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                keysToRemove.forEach((key) => {
                    delete state[key];
                });
                keysToRemove = [];
            }

            return combinedReducer(state, action);
        },
        add: (key: StateSchemaKeys, reducer: Reducer) => {
            if (!key || reducers[key]) return;

            reducers[key] = reducer;

            combinedReducer = combineReducers(reducers);
        },
        remove: (key: StateSchemaKeys) => {
            if (!key || !reducers[key]) return;

            delete reducers[key];

            keysToRemove.push(key);
            combinedReducer = combineReducers(reducers);
        },
    };
}
