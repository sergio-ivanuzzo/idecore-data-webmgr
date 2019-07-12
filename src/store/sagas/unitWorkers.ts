import { call, Effect, put, take } from 'redux-saga/effects';

import { UnitActionType } from '@store/actions';
import * as UnitAction from '@store/actions/unitActions';
import { initWebSocketConnection } from '@store/sagas/sources/websocketConnection';

export default function*(): IterableIterator<Effect<any>> {
    const channel = yield call(initWebSocketConnection);
    while (true) {
        const action = yield take(channel);
        console.log(action);

        switch (action.type) {
            case UnitActionType.UNIT_FETCH_LIST_RESPONSE: {
                yield put(UnitAction.actionFetchUnitsListComplete());
                break;
            }

            case UnitActionType.UNIT_ERROR: {
                yield put(UnitAction.actionUnitsError());
                break;
            }

            default: {
                break;
            }
        }
    }
}
