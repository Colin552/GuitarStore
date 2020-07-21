import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { checkLogin } from '../../_helpers/helpers.js'

import Logo from '../logo.js';
import CartIcon from '../../icons/cart';
import AccountIcon from '../../icons/account';

const Navbar = () => {
    const [getLogin, setLogin] = useState("");
    const loggedIn = useSelector(state => state.loggedIn);

    useEffect(() => {
        if (checkLogin()) {
            setLogin(
                <React.Fragment>
                    <NavLink to='/account'><AccountIcon /></NavLink>
                    <NavLink to='/cart'><CartIcon /></NavLink>
                </React.Fragment>

            )

        } else {
            setLogin(<NavLink to='/login'><AccountIcon /></NavLink>)
        }

    }, [loggedIn])
    return (
        <NavContainer>
            <NavContent>
                <NavBrand to='/'>The Riff <Logo /></NavBrand>
                <NavLinks>
                    <NavLink to='/category/electric'>Shop</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                </NavLinks>
                <NavRight>
                    {getLogin}


                </NavRight>
            </NavContent>
        </NavContainer>
    )
}

export default Navbar;



const NavLink = styled(Link)`
    text-decoration: none;
    color: black;
    margin-right: 20px;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: black;
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
    color: black;
    font-size: 18px;
    font-weight: bold;

    &:focus, &:hover, &:visited, &:link, &:active {
        
        text-decoration: none;
        color: black;
    }

    @media only screen and (max-width: 1200px) {
        margin-left: 10px;
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
    background: white;
    height: 50px;
    align-content: center;
    box-shadow: 0px 2px 8px #888888;
    @media only screen and (max-width: 1200px) {
        grid-template-columns: auto;
    }
`