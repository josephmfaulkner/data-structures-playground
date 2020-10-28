class BinaryTreeIterator {

    static searchNext(state)
    {
        let newCursor = null; 
        let newSuccess = false;
        
        console.log(state.target)

        if(state.cursor === null || state.success === true)
        {
            newCursor = state.binaryTree;
        }
        else if(state.target == state.cursor.data)
        {
            newCursor = state.cursor;
            newSuccess = true;
        }
        else if(state.target < state.cursor.data && state.cursor.leftNode !== null)
        {
            newCursor = state.cursor.leftNode;
        }
        else if(state.cursor.rightNode !== null)
        {
            newCursor = state.cursor.rightNode;
        }
        else if(state.cursor.leftNode == null && state.cursor.rightNode == null)
        {
            newCursor = state.cursor;
            newSuccess = false;
        } 

        return { 
            newCursor: newCursor, 
            success: newSuccess
        };

    }

}

export default BinaryTreeIterator;