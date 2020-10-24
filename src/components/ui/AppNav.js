import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

class AppNav extends React.Component {
    render()
    {
        return(
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <NavDropdown title="Data Structure" id="data-structure-select">
                        <NavDropdown.Item href="#">Linked List (TODO)</NavDropdown.Item>
                        <NavDropdown.Item href="/binarytree">Binary Tree</NavDropdown.Item>
                        <NavDropdown.Item href="#">Heap (TODO)</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Algorithm" id="algorithm-select">
                        <NavDropdown.Item href="#">Binary Search (TODO)</NavDropdown.Item>
                        <NavDropdown.Item href="#">Quick Sort (TODO)</NavDropdown.Item>
                        <NavDropdown.Item href="#">Merge Sort (TODO)</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default AppNav;