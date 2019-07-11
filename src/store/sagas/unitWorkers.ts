import { eventChannel, EventChannel } from 'redux-saga';
import { put, call, take, Effect } from 'redux-saga/effects';

import { UnitActionType } from '@store/actions';
import * as UnitAction from '@store/actions/unitActions';
import * as WebSocketAction from '@store/actions/websocketActions';

export const initWebSocketConnection = (): EventChannel<any> => {

    return eventChannel((emitter) => {
        const socket = new WebSocket('ws://127.0.0.1:9001');

        socket.onopen = (event: MessageEvent) => {
            socket.send(JSON.stringify(WebSocketAction.actionWebsocketSubscribe()));
        };

        socket.onmessage = (event: MessageEvent) => {
            return emitter({ type: event.data.type, payload: event.data.payload });
        };

        // unsubscribe socket
        return () => {};
    });
};

export default function* (): IterableIterator<Effect<any>> {
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
        }
    }
}