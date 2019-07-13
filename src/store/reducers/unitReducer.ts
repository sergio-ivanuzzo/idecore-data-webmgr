import { AnyAction } from 'redux';

import { UnitActionType } from 'store/actions/unitActions';

export interface IUnitTemplate {
    name: string;
    entry: number;
    scale_x: number;
    sub_name: string;
    faction_template: number;
    armor: number;
    resistance_holy: number;
    resistance_fire: number;
    resistance_nature: number;
    resistance_frost: number;
    resistance_shadow: number;
    resistance_arcane: number;
}

export interface IUnit {
    id: number;
    health: number;
    max_health: number;
    mana: number;
    max_mana: number;
    level: number;
    display_id: number;
    native_display_id: number;
    min_damage: number;
    max_damage: number;
    x: number;
    y: number;
    z: number;
    orientation: number;
    map_id: number;
    region_id: number;
    unit_template: IUnitTemplate;
}

export interface IUnitReducerState {
    unitItems: Array<IUnit>;
}

export const initialState: IUnitReducerState = {
    unitItems: [],
};

export const unitReducer = (state = initialState, action: AnyAction): IUnitReducerState => {
    switch (action.type) {
        case UnitActionType.UNIT_FETCH_LIST_COMPLETE: {
            return {
                ...state,
                unitItems: action.payload.unitItems,
            };
        }
        default:
            return state;
    }
};
