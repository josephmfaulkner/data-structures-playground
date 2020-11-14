import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import { watchStartSearch } from './datastructures/binaryTree/model/sagas';

import { binaryTree } from './datastructures/binaryTree/model/reducers';


function* rootSaga() {
    yield all([
      watchStartSearch(),
    ])
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    combineReducers({
        binaryTree
    }),
    composeWithDevTools(
        applyMiddleware(
            sagaMiddleware 
        )
    )
)
sagaMiddleware.run(rootSaga);

export default store;