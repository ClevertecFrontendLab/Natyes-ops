import { Reducer, UnknownAction, ReducersMapObject, EnhancedStore } from '@reduxjs/toolkit';
import { CombinedState } from '@reduxjs/toolkit/query';
import { StateSchema } from './state-schema';

export type StateSchemaKeys = keyof StateSchema;

export interface StateWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: UnknownAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKeys, reduser: Reducer) => void;
    remove: (key: StateSchemaKeys) => void;
}
