import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Common } from "./utils";
import { ProductCard } from "./components";

export default class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            products: [],
            enable: true
        }
    }

    componentDidMount(){
        this.setState({products: Common.products})
    }

    onClick = () => {
        this.setState({
            enable: false
        })
    }

    onSubmit = (data) => {
        const { products } = this.state;
        products.forEach( product => {
            if(product.id === data.id) {
                product = {
                    ...product,
                    ...data
                }
            }
        })
        this.setState({
            products,
            enable: true
        })
    }

	render() {
        const { products, enable } = this.state;
		return (
            <Container>
                <Row>
                    <Col className="text-center">
                        <h3>Add details for your products</h3>
                        <p>Unpriced product will be hidden. You can edit them later.</p>
                    </Col>
                </Row>
                <Row>
                    {
                        products.length > 0 && products.map( (product, index) => {
                            return (
                                <Col key={product.id} className="col-12 col-md-4" >
                                    <ProductCard data={product} onClick={this.onClick} enable={enable} onSubmit={this.onSubmit} index={index} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
		);
	}
}