import { all, takeEvery, AllEffect } from 'redux-saga/effects';

import { UnitActionType } from "@store/actions";

import unitSaga from "@store/sagas/unitWorkers";

export function* rootSaga(): IterableIterator<AllEffect<any>> {
    yield all([
        takeEvery(UnitActionType.UNIT_FETCH_LIST_REQUEST, unitSaga),
    ]);
}
