import { combineReducers } from 'redux';

import { IUnitReducerState, unitReducer } from './unitReducer';

export interface IStoreState {
    unitReducer: IUnitReducerState;
}

export const rootReducer = combineReducers<IStoreState>({
    unitReducer,
});
