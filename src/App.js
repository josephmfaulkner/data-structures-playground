import React from 'react';
import './bootstrap.min.css';
import './App.css';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import AppNav from './components/ui/AppNav';

import BinaryTreePage from './components/pages/BinaryTreePage';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col>
            <AppNav />
          </Col>
        </Row>
      </Container>  
      <BinaryTreePage />
    </div>
  );
}

export default App;
