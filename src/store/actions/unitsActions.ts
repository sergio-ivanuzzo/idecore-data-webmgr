import { AnyAction } from 'redux';

export enum UnitsActionType {
	UNITS_FETCH_LIST_COMPLETE = 'UNITS_FETCH_LIST_COMPLETE',
	UNITS_FETCH_ERROR = 'UNITS_FETCH_ERROR',
}

export function actionUnitsFetchComplete(payload: any): AnyAction {
	return {
		payload,
		type: UnitsActionType.UNITS_FETCH_LIST_COMPLETE,
	};
}

export function actionUnitsError(): AnyAction {
	return {
		type: UnitsActionType.UNITS_FETCH_ERROR,
	};
}
