import { combineReducers } from 'redux';

import { IPlayerReducerState, playersReducer } from './playersReducer';
import { IRegionsReducerState, regionsReducer } from './regionsReducer';
import { IUnitReducerState, unitsReducer } from './unitsReducer';

export interface IStoreState {
    playersReducer: IPlayerReducerState;
    regionsReducer: IRegionsReducerState;
    unitsReducer: IUnitReducerState;
}

export const rootReducer = combineReducers<IStoreState>({
    playersReducer,
    regionsReducer,
    unitsReducer,
});
