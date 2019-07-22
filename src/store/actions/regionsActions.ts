import { AnyAction } from 'redux';

import { IRegion } from '~store/reducers/regionsReducer';

export enum RegionsActionType {
	REGIONS_FETCH_LIST_RESPONSE = 'REGIONS_FETCH_LIST_RESPONSE',
	REGIONS_FETCH_LIST_COMPLETE = 'REGIONS_FETCH_LIST_COMPLETE',
	REGIONS_FETCH_ERROR_RESPONSE = 'REGIONS_FETCH_ERROR_RESPONSE',
	REGIONS_FETCH_ERROR = 'REGIONS_FETCH_ERROR',
}

export function actionFetchRegionsComplete(payload: Array<IRegion>): AnyAction {
	return {
		payload,
		type: RegionsActionType.REGIONS_FETCH_LIST_COMPLETE,
	};
}

export function actionRegionsError() {
	return {
		type: RegionsActionType.REGIONS_FETCH_ERROR,
	};
}
