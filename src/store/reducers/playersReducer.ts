import { AnyAction } from 'redux';

import { PlayersActionType } from '~store/actions';

export interface IPlayer {
	id: number;
	name: string;
	player_flags?: number;
	skin: number;
	face: number;
	hair_style: number;
	hair_color: number;
	facial_hair: number;
	xp: number;
	next_level_xp: number;
	block: number;
	dodge: number;
	parry: number;
	crit: number;
	money: number;
	player_bytes?: number;
	account_id: number;
}

export interface IPlayerReducerState {
	playerItems: Array<IPlayer>;
}

export const initialState: IPlayerReducerState = {
	playerItems: [],
};

export const playersReducer = (state = initialState, action: AnyAction): IPlayerReducerState => {
	switch (action.type) {
		case PlayersActionType.PLAYERS_FETCH_LIST_COMPLETE: {
			const playerItems = [...state.playerItems, ...new Set(action.payload)] as Array<IPlayer>;
			playerItems.sort((p1: IPlayer, p2: IPlayer): number => p1.name < p2.name ? -1 : 1);

			return {
				...state,
				playerItems,
			};
		}
		default: {
			return state;
		}
	}
};
