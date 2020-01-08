import React from 'react';
import styled from 'styled-components';

const CategoriesSidebar = () => {
    return (
        <SidebarContainer>
            <SidebarTitle>
                Categories
            </SidebarTitle>
            <SidebarContent>
                <CategoryName>Electric Guitars</CategoryName>
                <CategoryName>Acoustic Guitars</CategoryName>
                <CategoryName>Amplifiers</CategoryName>
            </SidebarContent>
        </SidebarContainer>
    )
}

export default CategoriesSidebar;

const SidebarContent = styled.div`
    border: 1px solid #e5e5e5;
`

const CategoryName = styled.p`
    background: #e5e5e5;
    padding-left: 5px;
    padding-top: 5px;
`

const SidebarTitle = styled.h4`
    padding-left: 5px;
    color: white;
    background: #49B4FF;
    padding-top: 5px;
    padding-bottom: 5px;
    font-weight: normal;
`

const SidebarContainer = styled.div`
    width:100%;
    display: grid;
    grid-template-columns: auto;
`