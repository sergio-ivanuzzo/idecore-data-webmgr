import { AnyAction } from 'redux';

import { RegionsActionType } from '~store/actions';

export interface IRegion {
	id: number;
	region_id: number;
	y1: number;
	y2: number;
	x1: number;
	x2: number;
	map_id: number;
	units: Array<any>;
	players: Array<any>;
}

export interface IRegionsReducerState {
	regionItems: Array<IRegion>;
}

export const initialState: IRegionsReducerState = {
	regionItems: [],
};

export const regionsReducer = (state = initialState, action: AnyAction): IRegionsReducerState => {
	switch (action.type) {
		case RegionsActionType.REGIONS_FETCH_LIST_COMPLETE: {
			return {
				...state,
				regionItems: action.payload,
			};
		}
		default: {
			return state;
		}
	}
};
