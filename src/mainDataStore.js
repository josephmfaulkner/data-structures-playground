import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import { binaryTree } from './components/datastructures/binaryTree/model/reducers';

const store = createStore(
    combineReducers({
        binaryTree
    }),
    composeWithDevTools(
        applyMiddleware(

        )
    )
)

export default store;