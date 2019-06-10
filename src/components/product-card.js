import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";
import { ProductForm } from './product-form';

export class ProductCard extends Component {
    constructor(props){
        super(props);

        this.state = {
            editable: false,
            data: {}
        }
    }

    componentDidMount(){
        let {data} = this.props;
        this.setState({data})
    }

    onClick = () => {
        this.setState({
            editable: true
        })
        this.props.onClick(true);
    }

    onSubmit = (data) => {
        this.setState({
            data,
            editable: false
        })
        this.props.onSubmit(data);
    }

    render() {
        const { editable, data, enable } = this.state;
        return (
            <Card className={`my-2 ${editable ? "selected" : ""}`} >
                <CardBody onClick={this.onClick} disabled={ (editable && enable) && !this.props.enable}>
                    {
                        editable ?
                        <div>
                            <ProductForm data={data} onSubmit={this.onSubmit}/>
                        </div>
                        :
                        <div className="py-2">
                            <CardImg src={data.baseImage} />
                            <CardTitle>{data.title ? data.title : "Product Title"}</CardTitle>
                            <CardText>&#8377; {data.price ? data.price : "--"}</CardText>
                        </div>
                    }
                </CardBody>
            </Card>
        );
    }
}
