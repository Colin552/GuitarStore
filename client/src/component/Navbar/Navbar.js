import React from 'react';
import styled from 'styled-components';
import {
    Link
} from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <NavContainer>
                <NavContent>
                    <NavBrand to='/'>The Riff</NavBrand>
                    <NavLinks>
                        <NavLink to='/shop'>Shop</NavLink>
                        <NavLink to='/about'>About</NavLink>
                        <NavLink to='/contact'>Contact</NavLink>
                    </NavLinks>
                    <NavRight>
                        <NavLink to='/login'>Login</NavLink>
                    </NavRight>
                </NavContent>
            </NavContainer>
        </header>
    )
}

export default Navbar;


const NavLink = styled(Link)`
    text-decoration: none;
    color: white;
    margin-right: 20px;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: white;
    }

`

const NavRight = styled.div`
    display: inline-block;
    order: 2;
    margin-top: 2px;
`

const NavLinks = styled.div`
    display: inline-block;
    margin-right: auto;
    margin-left: 40px;
    order: 1;
    margin-top: 2px;
`

const NavBrand = styled(Link)`
    display: inline-block;
    text-decoration: none;
    color: white;
    font-size: 18px;
    font-weight: bold;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: white;
    }
`

const NavContent = styled.div`
    grid-column: 2;
    align-content: center;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 1200px) {
        grid-column: 1;
    }
`

const NavContainer = styled.div`
    display: grid;
    grid-template-columns: auto 1200px auto;
    background: #49B4FF;
    height: 50px;
    align-content: center;

    @media only screen and (max-width: 1200px) {
        grid-template-columns: auto;
    }
`