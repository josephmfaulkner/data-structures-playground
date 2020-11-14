import { connect } from 'react-redux';
import { call, select, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { SEARCH_FOR_NODE, resetCursor, searchNodeStep } from './actions';

const delay = (ms) => new Promise(res => setTimeout(res, ms))
const getDoneStatus = (state) => { console.log(state); return state.binaryTree.done};

export function* startBinarySearch(action) {
    
    yield put(resetCursor());
    while(true)
    {
        yield delay(500);
        let done = yield select(getDoneStatus);
        if(done)
        {
            break;
        }
        yield put(searchNodeStep());
    }
    
    
    //
}

export function* watchStartSearch() {
    yield takeLatest(SEARCH_FOR_NODE, startBinarySearch)
}