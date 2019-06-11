import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";
import { ProductForm } from './product-form';

export class ProductCard extends Component {
    constructor(props){
        super(props);

        this.state = {
            editable: false,
            enable: true,
            data: {}
        }
    }

    componentDidMount(){
        let {data} = this.props;
        this.setState({data})
    }

    onClick = () => {
        this.setState({
            editable: true,
            enable: false
        })
        this.props.onClick();
    }

    onSubmit = (data) => {
        this.setState({
            data,
            enable: true,
            editable: false
        })
        this.props.onSubmit(data);
    }

    render() {
        const { editable, data, enable } = this.state;
        const { index } = this.props;
        return (
            <Card className={`my-2`}  disabled={enable && !this.props.enable} >
                <CardBody onClick={this.onClick}>
                    <CardImg src={data.baseImage} className="banner-image" />
                    <CardTitle>{data.title ? data.title : "Product Title"}</CardTitle>
                    <CardText>&#8377; {data.price ? data.price : "--"}</CardText>
                </CardBody>
                {
                    editable && 
                    <CardBody className={`${editable ? "selected" : ""} ${(index+1)%3 === 0 ? "third-card" : ""}`}>
                        <ProductForm data={data} onSubmit={this.onSubmit}/>
                    </CardBody>
                }
            </Card>
        );
    }
}
