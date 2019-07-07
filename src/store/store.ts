import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from '@store/sagas/rootSaga';
import { rootReducer } from '@store/reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);