import { AnyAction } from 'redux';

export enum WebSocketAction {
    SUBSCRIBE = 'SUBSCRIBE',

    WEB_SOCKET_ERROR = 'WEB_SOCKET_ERROR',
}

export function actionWebsocketSubscribe(): AnyAction {
    return {
        type: WebSocketAction.SUBSCRIBE,
    };
}
