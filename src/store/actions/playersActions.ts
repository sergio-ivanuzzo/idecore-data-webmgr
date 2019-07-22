import { AnyAction } from 'redux';

export enum PlayersActionType {
	PLAYERS_FETCH_LIST_COMPLETE = 'PLAYERS_FETCH_LIST_COMPLETE',
	PLAYERS_FETCH_ERROR = 'PLAYERS_FETCH_ERROR',
}

export function actionPlayersFetchComplete(payload: any): AnyAction {
	return {
		payload,
		type: PlayersActionType.PLAYERS_FETCH_LIST_COMPLETE,
	};
}

export function actionPlayersError(): AnyAction {
	return {
		type: PlayersActionType.PLAYERS_FETCH_ERROR,
	};
}
