import { AnyAction } from 'redux';

export enum UnitActionType {
    UNIT_FETCH_LIST_REQUEST = 'UNIT_FETCH_LIST_REQUEST',
    // this one uses for server side event
    UNIT_FETCH_LIST_RESPONSE = 'UNIT_FETCH_LIST_RESPONSE',
    UNIT_FETCH_LIST_COMPLETE = 'UNIT_FETCH_LIST_COMPLETE',

    UNIT_ERROR = 'UNIT_ERROR',
}

export function actionFetchUnitsList(): AnyAction {
    return {
        type: UnitActionType.UNIT_FETCH_LIST_REQUEST,
    };
}

export function actionFetchUnitsListComplete(): AnyAction {
    return {
        type: UnitActionType.UNIT_FETCH_LIST_COMPLETE,
    };
}

export function actionUnitsError(): AnyAction {
    return {
        type: UnitActionType.UNIT_ERROR,
    };
}
