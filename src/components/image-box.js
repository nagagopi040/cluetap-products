import React, { Component } from 'react';
import { Card,CardBody, CardTitle, Input, CardImg, Row, Col } from "reactstrap"

export class ImageBox extends Component {
    constructor(props){
        super(props);

        this.state = {
            images: []
        }
    }

    componentDidMount(){
        let { images } = this.props;
        this.setState({images})
    }

    uploadImage = (event) => {
        let image = URL.createObjectURL(event.target.files[0]);
        let { images } = this.state;
        images.push(image);
        this.setState({images})
    }

    render() {
        const { images } = this.state;
        return (
            <Card className="border-0 images-card">
                <CardBody className="py-0 d-flex flex-row justify-content-start">
                    <Row className="images-row">
                        {
                            images.length > 0 && images.map( (image, index) => {
                                return (
                                    <Col className="col-6 px-1 mb-2">
                                        <CardImg key={index} src={image} className="product-image" />
                                    </Col>
                                )
                            })
                        }
                        {
                            images.length < 4 && 
                            <Col className="col-6 px-1 mb-2">
                                <CardTitle className="plus-symbol">&#43;<Input type="file" className="file-upload" onChange={this.uploadImage} /></CardTitle>
                            </Col>
                        }
                    </Row>
                </CardBody>
            </Card>
        );
    }
}
