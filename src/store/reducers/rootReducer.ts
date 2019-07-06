import { combineReducers } from 'redux';

import { unitReducer, UnitReducerState } from './unitReducer';

export interface StoreState {
    unitReducer: UnitReducerState
}

export const rootReducer = combineReducers<StoreState>({
    unitReducer
});
