import React from 'react';
import { connect } from 'react-redux';

import { setTree, setTarget, searchNodeStep} from '../../../datastructures/binaryTree/model/actions';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import BinaryTreeNode from '../../../datastructures/binaryTree/model/BinaryTreeNode';

import BinaryTreeDisplay from '../../../datastructures/binaryTree/BinaryTreeDisplay';
import ActionBar from './actionBar';

class BinaryTreePage extends React.Component {

    constructor(props){
        super(props);
        this.props.setTree(BinaryTreeNode.createRandomTree(51));

        this.state = {
            scale: 50
        }
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
                <BinaryTreeDisplay 
                    treeData={this.props.binaryTree} 
                    cursorNode={this.props.cursor}
                    done={this.props.done}
                    success={this.props.success}
                    scale={this.state.scale} 
                    />
                <ActionBar 
                    changeScaleCallback={this.changeScale.bind(this)}  
                    scale={this.state.scale}
                />
            </div>
        );
    }
    
}





const mapStateToProps = (state /*ownProps*/) => {
    return {
        binaryTree: state.binaryTree.binaryTree,
        cursor: state.binaryTree.cursor, 
        done: state.binaryTree.done,
        success: state.binaryTree.success
    }
}

const mapDispatchToProps = {
    setTree, 
    setTarget, 
    searchNodeStep
}

export default connect(mapStateToProps, mapDispatchToProps)(BinaryTreePage);
