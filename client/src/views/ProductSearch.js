import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Sidebar from '../component/Shop/Sidebar';
import ProductCard from '../component/Shop/ProductCard.js';
import HeaderDropdown from '../component/Shop/HeaderDropdown.js'
import { useSelector } from 'react-redux'
//import {Link} from "react-router-dom";

const ProductSearch = ({ match }) => {

    let [getProducts, setProducts] = useState([]);
    let filterBy = useSelector(state => state.filter)
    let categoryURL;
    let productCards = [];

    let tempProducts = getProducts;


    if (filterBy.filter === "HIGH_TO_LOW") {
        tempProducts.sort((a, b) => {
            if (a.price > b.price) {
                return 1
            }
            else {
                return -1
            }
        })
    } else {
        tempProducts.sort((a, b) => {
            if (a.price < b.price) {
                return 1
            }
            else {
                return -1
            }
        })
    }

    if(match.params.brand){
        for (let i = 0; i < tempProducts.length; i++) {
            if (tempProducts[i].listed) {
                if(match.params.brand === tempProducts[i].brand_name.toString().toLowerCase()){
                    productCards.push(<ProductCard key={i} id={tempProducts[i].id} product_name={tempProducts[i].product_name} brand_name={tempProducts[i].brand_name} price={tempProducts[i].price} image={tempProducts[i].image} />)
                }
            }
        }
    }else{
        for (let i = 0; i < tempProducts.length; i++) {
            if (tempProducts[i].listed) {
                productCards.push(<ProductCard key={i} id={tempProducts[i].id} product_name={tempProducts[i].product_name} brand_name={tempProducts[i].brand_name} price={tempProducts[i].price} image={tempProducts[i].image} />)
            }
        }
    }



    switch (match.params.category) {
        case "electric":
            categoryURL = "7d705cfe-4bff-414d-b451-6f873d35df82"
            break;
        case "acoustic":
            categoryURL = "61d58012-ce72-4aab-ae50-545a035a3c64"
            break;
        case "bass":
            categoryURL = "f8a70250-1408-11ea-aaef-0800200c9a66"
            break;
        case "amplifiers":
            categoryURL = "c4931990-1408-11ea-aaef-0800200c9a66"
            break;
        case "tools":
            categoryURL = "2ef359c0-265f-473a-abde-bb18d34a4404"
            break;
        default:
            categoryURL = ""
    }

    useEffect(() => {

        fetch('http://localhost:3000/products/category/' + categoryURL)
            .then(res => res.json())
            .then(json => setProducts(json))

    }, [categoryURL, filterBy]);

    let RootHeader = () => {
        if (match.params.category) {
            return ("Home  > " + match.params.category);
        }
        else {
            return "Home";
        }
    }

    return (
        <ShopContainer>
            <SidebarContainer>
                <Sidebar category={match.params.category}/>
            </SidebarContainer>

            <ShopContent>
                <ShopHeader>
                    <HeaderLeft>{RootHeader()}</HeaderLeft>
                    <HeaderRight><HeaderDropdown /></HeaderRight>
                </ShopHeader>
                <ProductContainer>
                    {
                        productCards
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
