class BinaryTreeIterator {

    constructor(cursor, targetValue, success = false, done = false)
    {
        this.cursor = cursor;
        this.targetValue = targetValue;
        this.success = success;
        this.done = done;
    }

    searchNext()
    {
        let newCursor = this.cursor; 
        console.log(this.targetValue);

        if(this.cursor === null || this.success === true)
        {
            newCursor = this.cursor;
        }
        else if(this.targetValue == this.cursor.data)
        {
            this.done = true;
            this.success = true;
            //newCursor = this.cursor;
        }
        else if(this.targetValue < this.cursor.data && this.cursor.leftNode !== null)
        {
            newCursor = this.cursor.leftNode;
        }
        else if(this.cursor.rightNode !== null)
        {
            newCursor = this.cursor.rightNode;
        }
        else if(this.cursor.leftNode == null && this.cursor.rightNode == null)
        {
            newCursor = this.cursor;
            this.done = true;
            this.success = false;
        } 

        console.log(this.cursor.data);
        this.cursor = newCursor;

        console.log(this.done, this.success);

    }

    getCursor()
    {
        return this.cursor;
    }

    getTargetValue()
    {
        return this.targetValue;
    }

    getSuccess()
    {
        return this.success;
    }

    getDone()
    {
        return this.done;
    }

}

export default BinaryTreeIterator;