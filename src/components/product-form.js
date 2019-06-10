import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { ImageBox } from "./image-box";
import { Common } from '../utils';

export class ProductForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            productData: {},
            formnames: []
        }
    }

    componentDidMount(){
        const { data } = this.props;
        let formnames = Common.formnames;
        this.setState({
            productData: data,
            formnames
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let { productData } = this.state;
        this.props.onSubmit(productData);
    }

    onChange = (event, key) => {
        let { productData } = this.state;
        productData[key] = event.target.value
        this.setState({
            productData
        })
    }

    render() {
        const { data } = this.props;
        const { productData } = this.state;
        return (
            <div>
                <Form className="py-2" onSubmit={this.handleSubmit}>
                    <div className="d-flex flex-row justify-content-between">
                        <div>
                            <img src={data.baseImage} className="img-fluid" />
                            <FormGroup className="pt-2">
                                <Label for="productTitle">Product Title</Label>
                                <Input type="text" name="title" id="productTitle" placeholder="Enter title" value={productData.title} onChange={(event) => this.onChange(event, "title")} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="productPrice">Price</Label>
                                <Input type="number" name="price" id="productPrice" placeholder="Enter price" value={productData.price} onChange={(event) => this.onChange(event, "price")} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="productOfferPrice">Offer Price</Label>
                                <Input type="number" name="offerprice" id="productOfferPrice" placeholder="Enter offer price" value={productData.offerprice} onChange={(event) => this.onChange(event, "offerprice")} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="productShippingCost">Shipping Cost</Label>
                                <Input type="number" name="shippingcost" id="productShippingCost" defaultValue={0} value={productData.shippingcost} onChange={(event) => this.onChange(event, "shippingcost")} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="productInventory">Inventory</Label>
                                <Input type="number" name="inventory" id="productInventory" defaultValue={0} value={productData.inventory} onChange={(event) => this.onChange(event, "inventory")} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="productDescription">Description</Label>
                                <Input type="text" name="description" id="productDescription" placeholder="Enter description of product" value={productData.description} onChange={(event) => this.onChange(event, "description")} />
                            </FormGroup>
                        </div>
                        <div>
                            <ImageBox />
                        </div>
                    </div>
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        );
    }
}
