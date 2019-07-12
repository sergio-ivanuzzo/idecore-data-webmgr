import { eventChannel, EventChannel } from 'redux-saga';

import Connection from '@constants/connection';
import * as WebSocketAction from '@store/actions/websocketActions';

export const initWebSocketConnection = (): EventChannel<any> => {

    return eventChannel((emitter) => {
        const socket = new WebSocket(`ws://${Connection.websocket_host}:${Connection.websocket_port}`);

        socket.onopen = () => {
            socket.send(JSON.stringify(WebSocketAction.actionWebsocketSubscribe()));
        };

        socket.onmessage = (event: MessageEvent) => {
            return emitter({ type: event.data.type, payload: event.data.payload });
        };

        // unsubscribe socket
        return () => undefined;
    });
};
