import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Sidebar = (props) => {

    const brands = () => {
        switch (props.category) {
            case 'electric':
                return (
                    <React.Fragment>
                        <Category to='/category/electric/fender'>Fender</Category>
                        <Category to='/category/electric/gibson'>Gibson</Category>
                        <Category to='/category/electric/squier'>Squier</Category>
                        <Category to='/category/electric/epiphone'>Epiphone</Category>
                        <Category to='/category/electric/ibanez'>Ibanez</Category>
                    </React.Fragment>
                )
            case 'acoustic':
                return(
                    <React.Fragment>
                        <Category to='/category/acoustic/gibson'>Gibson</Category>
                        <Category to='/category/acoustic/taylor'>Taylor</Category>
                        <Category to='/category/acoustic/yamaha'>Yamaha</Category>
                    </React.Fragment>
                )
            case 'amplifiers':
                return(
                    <React.Fragment>
                        <Category to='/category/amplifiers/blackstar'>Blackstar</Category>
                        <Category to='/category/amplifiers/fender'>Fender</Category>
                        <Category to='/category/amplifiers/boss'>Boss</Category>
                    </React.Fragment>
                )
            case 'tools':
                return(
                    <React.Fragment>
                        <Category to='/tools/dunlop'>Dunlop</Category>
                        <Category to='/tools/yorkville'>Yorkville</Category>
                        <Category to='/tools/hercules'>Hercules</Category>
                    </React.Fragment>
                )
            default:
                break;
        }
    }

    let brandCategories = brands();

    return (
        <SidebarOuter>
            <SidebarInner>
                <SidebarHeader>Categories</SidebarHeader>
                <Category to='/category/electric'>Electric Guitars</Category>
                <Category to='/category/acoustic'>Acoustic Guitars</Category>
                <Category to='/category/amplifiers'>Amplifiers</Category>
                <Category to='/category/tools'>Parts &amp; tools</Category>

                <SidebarInnerHeader>Brand</SidebarInnerHeader>
                {brandCategories}
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