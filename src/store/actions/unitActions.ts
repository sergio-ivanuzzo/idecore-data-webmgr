import { AnyAction } from 'redux';

export enum UnitAction {
    UNIT_FETCH_LIST = 'UNIT_FETCH_LIST',
    UNIT_FETCH_LIST_COMPLETE = 'UNIT_FETCH_LIST_COMPLETE',

    UNIT_ERROR = 'UNIT_ERROR'
}

export function actionFetchUnitsList(): AnyAction {
    return {
        type: UnitAction.UNIT_FETCH_LIST
    }
}