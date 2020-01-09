import React from 'react';
import styled from 'styled-components';

const HeaderDropdown = () => {
    return (
        <DropdownContainer>
            
            <MenuOption value="0">Price - Low to High</MenuOption>
            <MenuOption value="1">Price - High to Low</MenuOption>
            <MenuOption value="2">Newest</MenuOption>
            <MenuOption value="3">Oldest</MenuOption>
        </DropdownContainer>
    )
}

export default HeaderDropdown;

const MenuOption = styled.option`
    
`

const DropdownContainer = styled.select`
    border: 1px solid black;
    border-radius: 15px;
`