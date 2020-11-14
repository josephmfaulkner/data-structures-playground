const SET_TREE = 'SET_TREE';
const SET_TARGET = 'SET_TARGET';
const RESET_CURSOR = 'RESET_CURSOR';
const SEARCH_FOR_NODE = 'SEARCH_FOR_NODE';
const SEARCH_NODE_STEP = 'SEARCH_NODE_STEP';
const IN_ORDER_TRAVERSAL = 'IN_ORDER_TRAVERSAL';

function setTree(binaryTree)
{
    return {
        type : SET_TREE,
        payload: binaryTree
    }
}

function setTarget(targetValue)
{
    return {
        type : SET_TARGET,
        payload: targetValue
    }
}

function resetCursor()
{
    return {
        type : RESET_CURSOR,
        payload: null
    }
}

function searchForNode()
{
    return {
        type : SEARCH_FOR_NODE,
        payload: null
    }
}

function searchNodeStep()
{
    return {
        type : SEARCH_NODE_STEP,
        payload: null
    }
}

export {
    SET_TREE,
    SET_TARGET,
    RESET_CURSOR,
    SEARCH_FOR_NODE,
    SEARCH_NODE_STEP,
    IN_ORDER_TRAVERSAL,
    setTree,
    setTarget,
    resetCursor,
    searchForNode,
    searchNodeStep
}