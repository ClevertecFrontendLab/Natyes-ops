import { Reducer } from '@reduxjs/toolkit';
import { StateSchemaKeys } from './manager-schema';
import { StateSchema } from './state-schema';

export type ReducersList = {
    [Key in StateSchemaKeys]?: Reducer<NonNullable<StateSchema[Key]>>;
};

export interface DynamicLoader {
    name: string;
    reducer: ReducersList;
    removeAfterUnmount?: boolean;
    children: ChildNode;
}
