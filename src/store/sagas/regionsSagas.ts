import { call, Effect, put, take } from 'redux-saga/effects';

import { RegionsActionType } from '~store/actions';

import * as PlayerAction from '~store/actions/playersActions';
import * as RegionAction from '~store/actions/regionsActions';
import * as UnitAction from '~store/actions/unitsActions';

import { IPlayer } from '~store/reducers/playersReducer';
import { IRegion } from '~store/reducers/regionsReducer';
import { IUnit } from '~store/reducers/unitsReducer';

import { initWebSocketConnection } from '~store/sagas/sources/websocketConnection';

export default function*(): IterableIterator<Effect<any>> {
	const channel = yield call(initWebSocketConnection);
	while (true) {
		try {
			const action = yield take(channel);

			switch (action.type) {
				case RegionsActionType.REGIONS_FETCH_LIST_RESPONSE: {
					const regions: Array<IRegion> = action.payload;
					const players: Array<IPlayer> = [].concat(regions.map((region) => region.players));
					const units: Array<IUnit> = [].concat(regions.map((region) => region.units));

					yield put(PlayerAction.actionPlayersFetchComplete(players));
					yield put(RegionAction.actionFetchRegionsComplete(regions));
					yield put(UnitAction.actionUnitsFetchComplete(units));
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
