import { act } from 'react-dom/test-utils';
import { SET_TREE, SET_TARGET, RESET_CURSOR, SEARCH_NODE_STEP, IN_ORDER_TRAVERSAL } from './actions';
import BinaryTreeIterator from './iterator';

class TreeAlgorithmState {
    constructor()
    {
        this.binaryTree = null;
        this.targetValue = null;
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
                binaryTree : action.payload,
                cursor: action.payload,
                done: false,
                success: false
            });
        case SET_TARGET:
            return Object.assign({}, state, {
                targetValue : action.payload
            });  
        case RESET_CURSOR:
            return Object.assign({}, state, {
                cursor : state.binaryTree,
                done   : false,
                success: false
            });

        case SEARCH_NODE_STEP:

            if(state.done)
            {
                return Object.assign({}, state, {
                    cursor : state.binaryTree,
                    done   : false,
                    success: false
                });
            }

            let nextCursor = new BinaryTreeIterator(
                state.cursor,
                state.targetValue,
                state.success,
                state.done
            );
            nextCursor.searchNext();

            return Object.assign({}, state, {
                cursor : nextCursor.getCursor(),
                done   : nextCursor.getDone(),
                success: nextCursor.getSuccess()
            });
        default:
            return state;       
    }
}

export {
    binaryTree
};