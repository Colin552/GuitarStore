import React from 'react';
import styled from 'styled-components';
import Link from "react-router-dom";

const Sidebar = () => {
    return (
        <SidebarOuter>
            <SidebarInner>
                <SidebarHeader>Categories</SidebarHeader>
                <Category>Electric Guitars</Category>
                <Category>Acoustic Guitars</Category>
                <Category>Amplifiers Guitars</Category>
                <Category>Parts &amp; tools </Category>

                <SidebarInnerHeader>Price</SidebarInnerHeader>
                <Category>Up to $499</Category>
                <Category>$500 to $749</Category>
                <Category>$750 to $1199</Category>
                <Category>$1199 to $2000</Category>

                <SidebarInnerHeader>Brand</SidebarInnerHeader>
                <Category>Fender</Category>
                <Category>Gibson</Category>
                <Category>Squier</Category>
                <Category>Epiphone</Category>
                <Category>Ibanez</Category>
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
    }
    &:visited{
        color: black;
    }
    &:hover{
        background: #dddddd;
        transition: 0.25s;
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
    &:hover {
        transition: 0.25s;
        box-shadow: 8px 8px 10px #c6c6c6;
    }
    transition: 0.25s;
`