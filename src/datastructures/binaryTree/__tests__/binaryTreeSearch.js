import BinaryTreeNode from '../model/BinaryTreeNode';
import {binaryTree} from '../model/reducers';
import { 
    SET_TREE,
    SET_TARGET,
    SEARCH_NODE_STEP,
    IN_ORDER_TRAVERSAL,
    setTree,
    setTarget,
    searchNodeStep
} from '../model/actions';



describe('Binary Search Tree', () => {

    let newBinaryTree = new BinaryTreeNode();
        newBinaryTree.insert(50);
        newBinaryTree.insert(40);
        newBinaryTree.insert(30);
        newBinaryTree.insert(10);
        newBinaryTree.insert(20);
        newBinaryTree.insert(70);
        newBinaryTree.insert(60);

    it('SETS INITIAL STATE', () => {
        expect(binaryTree(undefined, {})).toEqual(
            {
                binaryTree: null,
                target: null,
                callStack: [],
                cursor: null,
                done: false,
                success :false
            }
        )
    })

    it('SETS NEW TREE', () => {
        expect(binaryTree(undefined, setTree(newBinaryTree))).toEqual(
            {
                binaryTree: newBinaryTree,
                target: null,
                callStack: [],
                cursor: null,
                done: false,
                success :false
            }
        )
    })

    it('SETS NEW TARGET', () => {
        expect(binaryTree(undefined, setTarget(10))).toEqual(
            {
                binaryTree: null,
                target: 10,
                callStack: [],
                cursor: null,
                done: false,
                success :false
            }
        )
    })

    it('SEARCHES', () => {

        let binaryTreeState = binaryTree(undefined, setTree(newBinaryTree));
        binaryTreeState = binaryTree(binaryTreeState, setTarget(20));
        
        binaryTreeState = binaryTree(binaryTreeState, searchNodeStep());
        expect(binaryTreeState.cursor.data).toEqual(50);

        binaryTreeState = binaryTree(binaryTreeState, searchNodeStep());
        expect(binaryTreeState.cursor.data).toEqual(40);
        
        binaryTreeState = binaryTree(binaryTreeState, searchNodeStep());
        expect(binaryTreeState.cursor.data).toEqual(30);

        binaryTreeState = binaryTree(binaryTreeState, searchNodeStep());
        expect(binaryTreeState.cursor.data).toEqual(10);

        binaryTreeState = binaryTree(binaryTreeState, searchNodeStep());
        expect(binaryTreeState.cursor.data).toEqual(20);
        
    })


})