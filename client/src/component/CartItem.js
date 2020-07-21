import React from 'react';
import styled from 'styled-components'
import INF from '../images/INF.png'
import Button from './Button';

import { Link } from "react-router-dom";

const CartItem = (props) => {
    let inputQuantity = props.quantity;
    let userId= JSON.parse(localStorage.getItem('user'))
    userId = userId.id

    const handleQuantity = (e) => {
        console.log('fired')
        inputQuantity = e.target.value;
    }
    const handleUpdate = () => {
        console.log(userId)
        console.log(props.productId)
        console.log(inputQuantity)
        if (inputQuantity > 0) {
            fetch('http://localhost:3000/shopping-cart/update', {
                method: 'PATCH',
    
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'product_id': props.productId,
                    'user_id': userId,
                    'quantity': inputQuantity
                })
            })
        }else{
            fetch('http://localhost:3000/shopping-cart/delete', {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'product_id': props.productId,
                    'user_id': userId,
                })
            })
        }

        window.location.reload();
    }

    const productImg = () => {
        if (typeof (props.image) !== 'undefined') {
            return <ItemImage src={`data:image/png;base64,${props.image}`}></ItemImage>
        }
        else {
            return <ItemImage src={INF}></ItemImage>
        }
    }


    return (
        <React.Fragment>
            <ItemWrapper>
                {productImg()}
                <ItemDescription>
                    <ItemTitle>{props.brandName} {props.productName}</ItemTitle>
                    <p>{props.description}</p>
                    <p>${props.price}</p>
                    <br />
                    <Quantity defaultValue={props.quantity} onChange={handleQuantity} /> <QuantityButton onClick={handleUpdate}>Update Quantity</QuantityButton>
                    <br />
                    <Link to={'/product/' + props.productId}><Button text="View" /></Link>
                </ItemDescription>
            </ItemWrapper>
        </React.Fragment>

    )
}

export default CartItem;

const QuantityButton = styled.button`

margin-top: 20px;
border-radius: 3px;
color: white;
background: #568CE8;
border: 1px;
padding: 5px;
cursor: pointer;
`

const Quantity = styled.input.attrs(props => ({
    type: 'number',
    min: 0
}))`
    width: 40px;
    height: 24px;
  `

const ItemDescription = styled.div`
    margin-left: 10px;
`
const ItemWrapper = styled.div`
    margin-top: 10px;
    display: grid;
    grid-template-columns: 150px auto;
    background: white;

`
const ItemImage = styled.img`
    max-width: 150px;
    
`
const ItemTitle = styled.p`
    font-size: 1.1rem;
`