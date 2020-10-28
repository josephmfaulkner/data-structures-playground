class BinaryTreeNode { 
    constructor(data = null, leftNode = null, rightNode = null)
    {

        this.data = data; 
        this.leftNode = leftNode;
        this.rightNode = rightNode;
        
    }

    insert(newData){
        let cursor = this;
        if(cursor.data == null)
        {
            cursor.data = newData;
            return;
        }
        
        while(cursor != null)
        {
            if(newData < cursor.data)
            {
                if(cursor.leftNode == null)
                {
                    cursor.leftNode = new BinaryTreeNode(newData, null, null);
                    return;
                }
                else
                {
                    cursor = cursor.leftNode;
                }
            }
            else
            {
                if(cursor.rightNode == null)
                {
                    cursor.rightNode = new BinaryTreeNode(newData, null, null);
                    return;
                }
                else
                {
                    cursor = cursor.rightNode;
                }
            }
        }

    }


    static shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }

    static createRandomTree(treeSize) {
        let nodeNumbers = [...Array(treeSize).keys()];
        nodeNumbers.shift();
        nodeNumbers = BinaryTreeNode.shuffle(nodeNumbers);

        let newBinaryTree = new BinaryTreeNode();

        nodeNumbers.forEach(number => {
            newBinaryTree.insert(number);
        });

        return newBinaryTree;

    }

}

export default BinaryTreeNode;