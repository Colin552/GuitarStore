import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";


const Sidebar = () => {

    return (
        <SidebarOuter>
            <SidebarInner>
                <SidebarHeader>Categories</SidebarHeader>
                <Category to='/shop/electric'>Electric Guitars</Category>
                <Category to='/shop/acoustic'>Acoustic Guitars</Category>
                <Category to='/shop/amplifiers'>Amplifiers</Category>
                <Category to='/shop/tools'>Parts &amp; tools</Category>

                <SidebarInnerHeader>Price</SidebarInnerHeader>
                <Category to='/'>Up to $499</Category>
                <Category to='/'>$500 to $749</Category>
                <Category to='/'>$750 to $1199</Category>
                <Category to='/'>$1199 to $2000</Category>

                <SidebarInnerHeader>Brand</SidebarInnerHeader>
                <Category to='/'>Fender</Category>
                <Category to='/'>Gibson</Category>
                <Category to='/'>Squier</Category>
                <Category to='/'>Epiphone</Category>
                <Category to='/'>Ibanez</Category>
            </SidebarInner>
        </SidebarOuter>
    )
}

export default Sidebar;

const SidebarInnerHeader = styled.p`

    font-weight: bold;
    font-size: 14px;
    margin-bottom: 20px;
    margin-top: 20px;

`

const SidebarInner = styled.div`
    margin-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-right: 10px;
`

const Category = styled(Link)`
    padding-left: 5px;
    font-size: 14px;
    display: block;
    margin-top: 5px;
    text-decoration: none;
    border-radius: 3px;
    &:active{
        color: black;
        text-decoration: none;
    }
    &:visited{
        color: black;
        text-decoration: none;
    }
    &:hover{
        background: #dddddd;
        transition: 0.25s;
        text-decoration: none;
    }
    &:link{
        color: black;
        text-decoration: none;
    }
`

const SidebarHeader = styled.p`

    font-weight: bold;
    font-size: 14px;
    margin-bottom: 20px;

`

const SidebarOuter = styled.div`
    background: #EBEBEB;
    width: 100%;
`