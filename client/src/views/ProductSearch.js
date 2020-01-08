import React from 'react';
import styled from 'styled-components';
import CategoriesSidebar from '../component/Shop/Sidebars/CategoriesSidebar.js';
import ProductCard from '../component/Shop/ProductCard.js';

const ProductSearch = () =>{
    return(
        <ShopContainer>
            <SidebarContainer>
                <CategoriesSidebar />
            </SidebarContainer>
            <ProductContainer>
                <ProductsHeader>
                    <LeftHeader>Home</LeftHeader>
                    <RightHeader>Pages 1, 2, 3 ... 10</RightHeader>
                </ProductsHeader>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </ProductContainer>
        </ShopContainer>
    )
}

export default ProductSearch;

const LeftHeader = styled.div`
    display: inline-block;
`

const RightHeader = styled.div`
    display: inline-block;
`

const ProductsHeader = styled.div`
    grid-column: 1 / 5;
    display: flex;
    justify-content: space-between;
`

const SidebarContainer = styled.div`
    grid-column: 1;
`

const ProductContainer = styled.div`
    grid-column: 2;
    display: grid;
    grid-template-columns: auto auto auto auto;
    margin-left: 10px;
    column-gap: 10px;
`

const ShopContainer = styled.div`
    display: grid;
    grid-template-columns: 200px auto;
    margin-top: 10px;

`