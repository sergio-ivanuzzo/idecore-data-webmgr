import { call, Effect, put, take } from 'redux-saga/effects';

import { RegionsActionType } from '~store/actions';
import * as RegionAction from '~store/actions/regionsActions';
import { IRegion } from '~store/reducers/regionsReducer';
import { initWebSocketConnection } from '~store/sagas/sources/websocketConnection';

export default function*(): IterableIterator<Effect<any>> {
	const channel = yield call(initWebSocketConnection);
	while (true) {
		try {
			const action = yield take(channel);

			switch (action.type) {
				case RegionsActionType.REGIONS_FETCH_LIST_RESPONSE: {
					const regions: Array<IRegion> = action.payload;
					yield put(RegionAction.actionFetchRegionsComplete(regions));
					break;
				}

				case RegionsActionType.REGIONS_FETCH_ERROR_RESPONSE: {
					yield put(RegionAction.actionRegionsError());
					break;
				}

				default: {
					break;
				}
			}
		} catch (e) {
			return;
		}
	}
}
