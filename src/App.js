import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {  
	render() {
		return (
            <Container>
                <Row>
                    <Col className="text-center">
                        <h3>Add details for your products</h3>
                        <p>Unpriced product will be hidden. You can edit them later.</p>
                    </Col>
                </Row>
            </Container>
		);
	}
}