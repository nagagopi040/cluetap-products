import React, { Component } from 'react';
import { Card,CardBody, CardTitle, Input, CardImg } from "reactstrap"

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

    onImageClick = (image) => {
        this.props.onImageClick(image);
    }

    render() {
        const { images } = this.state;
        return (
            <Card className="border-0 images-card">
                <CardBody className="py-0 pr-0 d-flex flex-row justify-content-start flex-wrap">
                    {
                        images.length > 1 && images.map( (image, index) => {
                            return (
                                <CardImg key={index} src={image} className="product-image" onClick={() => this.onImageClick(image)} />
                            )
                        })
                    }
                    {
                        images.length < 6 && 
                        <CardTitle className="plus-symbol">&#43;<Input type="file" className="file-upload" onChange={this.uploadImage} /></CardTitle>
                    }
                </CardBody>
            </Card>
        );
    }
}
