import { all, AllEffect, fork } from 'redux-saga/effects';

import regionsSaga from '~store/sagas/regionsSagas';

export function* rootSaga(): IterableIterator<AllEffect<any>> {
    yield all([
        fork(regionsSaga),
    ]);
}
