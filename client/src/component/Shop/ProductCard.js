import React from 'react';
import styled from 'styled-components';
import noImage from '../../images/INF.png';
import { useHistory } from 'react-router-dom';

const ProductCard = (props) => {
    const history = useHistory();

    const productImg = () => {
        if (typeof(props.image) !== 'undefined'){
            return <ProductImage src={`data:image/png;base64,${props.image}`}></ProductImage>
        }
        else{
            return <ProductImage src={noImage}></ProductImage>
        }
    }

    return (
        <CardContainer onClick={() => history.push('/product/' + props.id)}>
            {productImg()}
            <ProductInfo>
                <ProductTitle>{props.brand_name} {props.product_name}</ProductTitle>
                <ProductPrice>${props.price}</ProductPrice>
            </ProductInfo>
        </CardContainer>
    )
}

export default ProductCard;

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
    max-width: 200px;
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