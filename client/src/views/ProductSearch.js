import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Sidebar from '../component/Shop/Sidebar';
import ProductCard from '../component/Shop/ProductCard.js';
import HeaderDropdown from '../component/Shop/HeaderDropdown.js'

const ProductSearch = ({ match }) => {

    let [getProducts, setProducts] = useState([]);
    let categoryURL;
    
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
            break;
        default:

    }

    useEffect(() => {

        fetch('http://localhost:3000/products/category/' + categoryURL)
            .then(res => res.json())
            .then(json => setProducts(json))

    }, [categoryURL]);

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
                            <ProductCard key={index} product_name={p.product_name} brand_name={p.brand_name} price={p.price} image={p.image} />
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
