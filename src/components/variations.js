import React, { Component } from 'react';
import { Input } from "reactstrap";

export class VariationBox extends Component {
    constructor(props){
        super(props);

        this.state = {
            variations: {},
            disabled: false,
            disableNewVariation: false,
            newOptionName: "",
            newVariation: false
        }
    }

    componentDidMount(){
        let { variations } = this.props;
        this.setState({
            variations
        })
    }

    addVariations = () => {
        this.setState({
            newVariation: true
        })
    }

    handleVariation = (event, key, value) => {
        let { variations } = this.state;
        let index = variations[key].indexOf(value);
        if(index !== -1){
            variations[key][index] = event.target.value;
        }
        this.setState({variations});
    }

    addNewvariation = (key) => {
        let { variations } = this.state;
        variations[key].push("");
        this.setState({
            disabled: true
        })
    }

    enableVariationButton = (event) => {
        if(event.target.value){
            this.setState({
                disabled: false
            })
        }
    }

    changeOptionName = (event) => {
        this.setState({
            newOptionName: event.target.value
        })
    }

    enableNewVariation = (event) => {
        if(event.target.value){
            let { variations } = this.state;
            let value = event.target.value;
            variations[value] = []
            this.setState({
                disableNewVariation: false,
                newVariation: false,
                newOptionName: "",
                variations
            })
        }

    }

    render() {
        const { variations, disabled, newVariation, disableNewVariation, newOptionName } = this.state;
        const variationItems = variations && Object.keys(variations).map( (key, index) => {
            return (
                <div key={index} className="py-4">
                    <p className="font-weight-bold">{key}</p>
                    {
                        variations[key].map( (variation, index) => {
                            return(
                                <Input
                                    key={`${index}${key}`}
                                    type="text"
                                    placeholder="Add variation"
                                    value={variations[key][index]}
                                    onChange={(event) => this.handleVariation(event, key, variation)}
                                    onBlur={this.enableVariationButton}
                                />
                            )
                        })
                    }
                    <div className="py-2" disabled={disabled} ><span onClick={() => this.addNewvariation(key)} className="varitions-plus-symbol small-plus">&#43;</span><span>Add more variation</span></div>
                </div>
            )
        })
        return (
            <div className="varitions-box px-4">
                {
                    variations && Object.keys(variations).length > 0 &&
                        <div>{variationItems}</div>
                }
                { newVariation &&
                    <Input
                        type="text"
                        placeholder="Add option name"
                        value={newOptionName}
                        onChange={this.changeOptionName}
                        onBlur={this.enableNewVariation}
                        className="my-2"
                    />
                }
                <div disabled={disableNewVariation} className={`d-flex flex-column justify-content-center align-items-center ${variations && Object.keys(variations).length > 0 ? "variations": ""}`}>
                    <span className="varitions-plus-symbol" onClick={this.addVariations} >&#43;</span>
                    <span className="text-center text">
                    <p>{   
                        variations && Object.keys(variations).length > 0 ?
                        "Add more Variations"
                        :
                        "Have variations to your product like size, color and more?"
                    }</p>
                    </span>
                </div>
            </div>
        );
    }
}
