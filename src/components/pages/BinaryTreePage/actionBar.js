import React from 'react';

import { connect } from 'react-redux';

import { setTree, setTarget, searchForNode } from '../../../datastructures/binaryTree/model/actions';
import BinaryTreeNode from '../../../datastructures/binaryTree/model/BinaryTreeNode';

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
    
    constructor(props)
    {
        super(props);
        this.state = {
            targetValue: null
        }; 
    }

    updateTargetValue(value){
        this.setState({
            targetValue: value
        });
        this.props.setTarget(value);
    }

    render()
    {
        return(
            <Container fluid>
                <Row>
                    <Col>
                        <Navbar bg="dark" variant="dark" expand="sm" fixed="bottom">    
                                <Nav className="mr-auto">
                                <Form inline className="sm-12 mr-sm-4" >
                                    <FormControl 
                                        type="text" placeholder="nodeNum, [nodeNum, nodeNum, nodeNum]" className="mr-sm-2"
                                        onChange={(event) => {this.updateTargetValue(event.target.value);}}
                                        value={this.state.targetValue}
                                    />
                                    <Button variant="outline-primary" onClick={() => {this.props.searchForNode();}}>Search</Button>
                                </Form>
                                <Form inline>
                                    <Form.Group controlId="formBasicRangeCustom">
                                        <Form.Label>Scale</Form.Label>
                                        <Form.Control type="range" min="20" max="1000" value={this.props.scale}  custom onChange={(event) => {this.props.changeScaleCallback(event.target.value);}}/>
                                    </Form.Group>
                                </Form>
                                </Nav>
                                <Button variant="outline-primary" onClick={() => {this.props.setTree(BinaryTreeNode.createRandomTree(26));}}>Random</Button>

                        </Navbar>
                    </Col>
                </Row>
            </Container> 
        );
    }
    
}

const mapStateToProps = (state /*ownProps*/) => {
    return {
        
    }
}

const mapDispatchToProps = {
    setTree, 
    setTarget, 
    searchForNode
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionBar);
