import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import BinaryTreeNode from '../../datastructures/binaryTree/model/BinaryTreeNode';

import BinaryTreeDisplay from '../../datastructures/binaryTree/BinaryTreeDisplay';
import ActionBar from './actionBar';

class BinaryTreePage extends React.Component {

    constructor(){
        super();
        this.state = {
            scale: 50,
            treeData : BinaryTreeNode.createRandomTree(25)
        }
    }

    randomTree()
    {
        this.setState({
            treeData: BinaryTreeNode.createRandomTree(50)
        });
    }

    changeScale(newScaleValue)
    {
        this.setState({
            scale: newScaleValue
        });
    }

    render()
    {
        return(
            <div>
                <BinaryTreeDisplay treeData={this.state.treeData} scale={this.state.scale} />
                <ActionBar 
                    randomTreeCallback={this.randomTree.bind(this)}
                    changeScaleCallback={this.changeScale.bind(this)}  
                    scale={this.state.scale}
                />
            </div>
        );
    }
    
}

export default BinaryTreePage;