import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class ActionBar extends React.Component {
    
    render()
    {
        return(
            <Container fluid>
                <Row>
                    <Col>
                        <Navbar bg="dark" variant="dark" expand="lg" fixed="bottom">    
                                <Nav className="mr-auto">
                                <Form inline className="sm-12 mr-sm-4" >
                                    <FormControl type="text" placeholder="nodeNum, [nodeNum, nodeNum, nodeNum]" className="mr-sm-2" />
                                    <Button variant="outline-primary">Add</Button>
                                    <Button variant="outline-primary">Remove</Button>
                                    <Button variant="outline-primary">Search</Button>
                                </Form>
                                <Form inline>
                                    <Form.Group controlId="formBasicRangeCustom">
                                        <Form.Label>Scale</Form.Label>
                                        <Form.Control type="range" custom />
                                    </Form.Group>
                                </Form>
                                </Nav>

                        </Navbar>
                    </Col>
                </Row>
            </Container> 
        );
    }
    
}

export default ActionBar;