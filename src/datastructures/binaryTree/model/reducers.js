import { act } from 'react-dom/test-utils';
import { SET_TREE, SET_TARGET, SEARCH_NODE_STEP, IN_ORDER_TRAVERSAL } from './actions';
import BinaryTreeIterator from './iterator';

class TreeAlgorithmState {
    constructor()
    {
        this.binaryTree = null;
        this.target = null;
        this.callStack = [];
        this.cursor = null;
        this.done = false;
        this.success = false;
    }
}

const initialState = new TreeAlgorithmState();


function binaryTree(state = initialState, action)
{
    switch(action.type)
    {
        case SET_TREE: 
            return Object.assign({}, state, {
                binaryTree : action.payload
            });
        case SET_TARGET:
            return Object.assign({}, state, {
                target : action.payload
            });  
        case SEARCH_NODE_STEP:
            let iteratorNext = BinaryTreeIterator.searchNext(state);
            let { newCursor, success } = iteratorNext;

            return Object.assign({}, state, {
                cursor : newCursor,
                success: success
            });

        default:
            return state;       
    }
}

export {
    binaryTree
};