import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import BinaryTreeDisplay from '../../datastructures/binaryTree/BinaryTreeDisplay';
import ActionBar from './actionBar';

class BinaryTreePage extends React.Component {
    
    render()
    {
        return(
            <div>
                <BinaryTreeDisplay />
                <ActionBar />
            </div>
        );
    }
    
}

export default BinaryTreePage;