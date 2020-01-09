import React, { Component } from 'react';
import styled from 'styled-components';
import myImage from '../../images/stratocaster.jpg';
import { withRouter } from "react-router-dom";

class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleClick = () =>{
        this.props.history.push("/product")
    }
    render() {
        return (
            <CardContainer onClick={this.handleClick}>
                
                <ProductImage src={myImage}></ProductImage>
                <ProductInfo>
                    <ProductTitle>Fender stratocaster In Natural Wood Color</ProductTitle>
                    <ProductPrice>699.99</ProductPrice>
                </ProductInfo>
            </CardContainer>
        );
    }
}

export default withRouter(ProductCard);


const CardContainer = styled.div`
    border: 1px solid #e5e5e5;
    cursor: pointer;
    &:hover {
        transition: 0.25s;
        box-shadow: 8px 8px 10px #c6c6c6;
    }
    transition: 0.25s;
`

const ProductImage = styled.img`
    max-height: 250px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    padding: 5px;
`

const ProductInfo = styled.div`
    background: #e5e5e5;
    padding: 5px;
`

const ProductTitle = styled.p`
    text-align: center;
    margin: 10px;
`

const ProductPrice = styled.p`
    margin-top: 10px;
    margin-left: 10px;
`

