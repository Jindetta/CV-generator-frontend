import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Ribbon from "./Ribbon";

import './App.css';


class App extends Component {
  render() {
    return (
        <Container fluid={true}>
            <Row>
                <Col xs={12}>
                    <Ribbon/>
                </Col>
            </Row>
        </Container>
    );
  }
}

export default App;
