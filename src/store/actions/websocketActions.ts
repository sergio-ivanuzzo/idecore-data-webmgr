import { AnyAction } from 'redux';

export enum WebSocketAction {
    WEB_SOCKET_SUBSCRIBE = 'WEB_SOCKET_SUBSCRIBE',

    WEB_SOCKET_ERROR = 'WEB_SOCKET_ERROR'
}

export function actionWebsocketSubscribe(): AnyAction {
    return {
        type: WebSocketAction.WEB_SOCKET_SUBSCRIBE
    }
}
