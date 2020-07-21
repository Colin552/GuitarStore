import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import noImage from '../images/INF.png';
import { checkLogin } from '../_helpers/helpers'
import { useHistory } from 'react-router-dom';
const Product = ({ match }) => {
    let [getProduct, setProduct] = useState([]);
    let user;
    const history = useHistory();
    if (checkLogin()) {
        user = localStorage.getItem('user');
        user = JSON.parse(user)
    }
    const productImage = () => {
        if (getProduct.images !== undefined) {

            if (getProduct.images.length > 0){
                return (<MainImage src={`data:image/png;base64,${getProduct.images[0]}`} />)
            }
            else{
                return (<MainImage src={noImage} />)
            }
            

        }
        else {
            return (<MainImage src={noImage} />)
        }
    }

    useEffect(() => {

        fetch('http://localhost:3000/products/' + match.params.id)
            .then(res => res.json())
            .then(json => { setProduct(json) })

    }, [match.params.id]);

    const handleClick = () => {
        if (checkLogin()) {

            fetch('http://localhost:3000/shopping-cart/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'user_id': user.id,
                    'product_id': getProduct.id,
                    'quantity': 1
                })
            })
                .then(history.push('/cart'))
        } else {
            history.push('/login')
        }

    }

    const pageButton = () => {
        if (checkLogin()) {

            let cartProducts = []
            let productInCart = false;
            cartProducts = JSON.parse(localStorage.getItem('cartProducts'));

            for (let i = 0; cartProducts.length > i; i++) {
                if (cartProducts[i].id === match.params.id) {
                    productInCart = true;
                }
            }

            if (productInCart) {

                return (
                    <CartButton onClick={() => { history.push('/cart') }}>Go to Cart</CartButton>
                )
            }
            else {
                return (
                    <CartButton onClick={handleClick}>Add To Cart</CartButton>
                )
            }

        } else {
            return (
                <CartButton onClick={handleClick}>Add To Cart</CartButton>
            )
        }
    }

    return (
        <React.Fragment>
            <GridWrapper>
                <ProductImages>
                    {productImage()}
                </ProductImages>
                <ProductInfo>
                    <ProductTitle>{getProduct.brand_name} {getProduct.product_name}</ProductTitle>
                    <br />
                    {getProduct.description}
                    <br />
                    ${getProduct.price}
                    <br />
                    {pageButton()}
                    {/*<CartButton onClick={handleClick}>Add To Cart</CartButton>*/}
                </ProductInfo>
            </GridWrapper>
        </React.Fragment>
    )
}

export default Product;

const CartButton = styled.button`
    margin-top: 20px;
    border-radius: 3px;
    color: white;
    background: #568CE8;
    border: 1px;
    padding: 5px;
    cursor: pointer;
`

const ProductTitle = styled.h2`
`

const MainImage = styled.img`
    max-width: 200px;
`

const GridWrapper = styled.div`
    margin-top: 10px;
    display: grid;
    grid-template-columns: 300px auto;
`

const ProductInfo = styled.div`
    grid-column: 2;
`

const ProductImages = styled.div`
    grid-column: 1;
`