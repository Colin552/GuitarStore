import React from 'react';
import styled from 'styled-components'

const CustomButton = (props) => {
    return (
        <Button>{props.text}</Button> 
    )
}

export default CustomButton;

const Button = styled.button`

    margin-top: 20px;
    border-radius: 3px;
    color: white;
    background: #568CE8;
    border: 1px;
    padding: 5px;
    cursor: pointer;
`