import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

const HeaderDropdown = () => {
    const dispatch = useDispatch();
    const handleSelect = (e) => {
        dispatch({ type: 'SET_FILTER', value: e.target.value})
    }
    return (
        <DropdownContainer onChange={handleSelect}>

            <MenuOption value="" defaultValue hidden>Filter By</MenuOption>
            <MenuOption value="LOW_TO_HIGH">Price - Low to High</MenuOption>
            <MenuOption value="HIGH_TO_LOW">Price - High to Low</MenuOption>

        </DropdownContainer>
    )
}

export default HeaderDropdown;

const MenuOption = styled.option`
    
`

const DropdownContainer = styled.select`
    border: 1px solid black;
    border-radius: 8px;
`