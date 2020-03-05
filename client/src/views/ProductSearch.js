import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Sidebar from '../component/Shop/Sidebar';
import ProductCard from '../component/Shop/ProductCard.js';
import HeaderDropdown from '../component/Shop/HeaderDropdown.js'
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";

const ProductSearch = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    let [getProducts, setProducts] = useState([]);

    switch(history.location.pathname){
        case "/shop/electric":
            dispatch({type: 'SET_CATEGORY', value:"ELECTRIC"});
            break;
        case "/shop/acoustic":
            dispatch({type: 'SET_CATEGORY', value:"ACOUSTIC"});
            break;
        case "/shop/amplifiers":
            dispatch({type: 'SET_CATEGORY', value:"AMPLIFIER"});
            break;
        case "/shop/tools":
            dispatch({type: 'SET_CATEGORY', value:"TOOLS"});
            break;
        default:
            dispatch({type: 'SET_CATEGORY', value:""});
    }

    useEffect(() => {
        fetch('http://localhost:3000/products/category/7d705cfe-4bff-414d-b451-6f873d35df82')
        .then(res => res.json())
        .then(json => setProducts(json))
        
    }, []);

    return (
        <ShopContainer>
            <SidebarContainer>
                <Sidebar />
            </SidebarContainer>

            <ShopContent>
                <ShopHeader>
                    <HeaderLeft>Home</HeaderLeft>
                    <HeaderRight>Filter By <HeaderDropdown /> Page: 1, 2, 3 ... 11</HeaderRight>
                </ShopHeader>
                <ProductContainer>
                    {
                        getProducts.map((p, index) => (
                            <ProductCard key = {index} product_name = {p.product_name} brand_name = {p.brand_name} price = {p.price} image = {p.image}/>
                        ))
                    }
                </ProductContainer>

                <ShopFooter></ShopFooter>
            </ShopContent>
        </ShopContainer>
    )
}

export default ProductSearch;

const HeaderLeft = styled.div`
`

const HeaderRight = styled.div`
`

const ShopHeader = styled.div`
    margin-left: 10px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
`
const ShopFooter = styled.div`
    height: 30px;
`

const ProductContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 10px;
    margin-left: 10px;
`

const ShopContainer = styled.div`
    display: grid;
    grid-template-columns: 200px auto;
    margin-top: 20px;
`

const SidebarContainer = styled.div`
    grid-column: 1;

`

const ShopContent = styled.div`
    grid-column: 2;
`
