import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CartItem from '../component/CartItem.js';
import Button from '../component/Button';

//import { checkLogin } from '../_helpers/helpers'

import { Link } from "react-router-dom";
//import { useHistory } from 'react-router-dom';

const ShoppingCart = () => {
    //const history = useHistory();

    let [getCartProducts, setCartProducts] = useState([]);
    let user = localStorage.getItem('user');
    user = JSON.parse(user)
    let productCards = [];
    let subTotal = 0;
    let shippingTotal = 0;
    let taxRate = 0.13;
    let taxTotal = 0;
    let total = 0;

    localStorage.setItem('cartProducts', JSON.stringify(getCartProducts))

    //Update totals
    const updateTotals = () => {
        for (let i = 0; i < getCartProducts.length; i++) {
            subTotal += parseFloat(getCartProducts[i].price) * getCartProducts[i].quantity
            taxTotal += parseFloat(getCartProducts[i].price) * taxRate;
            shippingTotal = 15.95;
            total = subTotal + taxTotal + shippingTotal;

            subTotal = subTotal.toFixed(2);
            taxTotal = taxTotal.toFixed(2);
            total = total.toFixed(2);
        }
    }

    //Create product card divs
    for (let i = 0; i < getCartProducts.length; i++) {
        if (getCartProducts[i].quantity > 0) {           
            productCards.push(<CartItem key={i} productId={getCartProducts[i].id} brandName={getCartProducts[i].brand_name} productName={getCartProducts[i].product_name} price={getCartProducts[i].price} image={getCartProducts[i].image} quantity={getCartProducts[i].quantity} />)
        }
    }

    updateTotals();

    useEffect(() => {
        fetch('http://localhost:3000/shopping-cart/user/' + user.id, {
            method: 'GET',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(json => { setCartProducts(json)})
            .then(updateTotals())
    }, [user.id])

    return (
        <React.Fragment>
            <Title>Your Shopping Cart</Title>
            {productCards}

            <Totals>
                <hr />
                <p>SubTotal: ${subTotal}</p>
                <p>Taxes: ${taxTotal}</p>
                <p>Shipping: ${shippingTotal}</p>
                <p>Total: ${total}</p>
            </Totals>
            <Link to="/checkout"><Button text="Proceed To Checkout" /></Link>

        </React.Fragment>
    )
}

export default ShoppingCart;

const Totals = styled.div`
margin-top: 20px;
`

const Title = styled.h3`
    margin-top: 10px;
`