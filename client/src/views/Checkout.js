import React, { useState } from 'react';
import styled from 'styled-components';

const Checkout = () => {
    const [getFirstName, setFirstName] = useState("");
    const [getLastName, setLastName] = useState("");
    const [getAddress, setAddress] = useState("");
    const [getApartment, setApartment] = useState("");
    const [getCity, setCity] = useState("");
    const [getCountry, setCountry] = useState("");
    const [getProvince, setProvince] = useState("");
    const [getPostal, setPostal] = useState("");

    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    const handleSubmit = (e) => {
        e.preventDefault();
        let formedAddress = '';
        formedAddress = getAddress;
        formedAddress += ' ' + getApartment;
        formedAddress += ' ' + getCity;
        formedAddress += ' ' + getCountry;
        formedAddress += ' ' + getPostal;
        console.log(formedAddress)
        console.log(user.id)
        /*
        fetch('http://localhost:3000/user-order/', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: user.id
                
            })
        })
        */
    }
    return (
        <React.Fragment>
            <Title>Checkout</Title>
            <br />
            Shipping Address
            <form onSubmit={handleSubmit}>
                <FormWrapper>
                    <Input
                        placeholder='First Name'
                        value={getFirstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                    <Input
                        placeholder='Last Name'
                        value={getLastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                    <InputFull
                        placeholder='Address'
                        value={getAddress}
                        onChange={e => setAddress(e.target.value)}
                    />
                    <Input
                        placeholder='Apartment, suite, etc'
                        value={getApartment}
                        onChange={e => setApartment(e.target.value)}
                    />
                    <Input
                        placeholder='City'
                        value={getCity}
                        onChange={e => setCity(e.target.value)}
                    />

                    <Input
                        placeholder='Province / State'
                        value={getProvince}
                        onChange={e => setProvince(e.target.value)}

                    />
                    <Input
                        placeholder='Country'
                        value={getCountry}
                        onChange={e => setCountry(e.target.value)}
                    />
                    <Input
                        placeholder='Postal Code / Zip Code'
                        value={getPostal}
                        onChange={e => setPostal(e.target.value)}
                    />
                </FormWrapper>
                <Submit>Submit</Submit>
            </form>
        </React.Fragment>
    )
}

export default Checkout;

const Title = styled.h3`
    margin-top: 10px;
`

const FormWrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
`
const InputFull = styled.input`
    padding: 5px;
    border-radius: 3px;
    margin-top: 20px;
    width: 90%;
    grid-column: 1 / 4;
`

const Input = styled.input`
    padding: 5px;
    border-radius: 3px;
    margin-top: 20px;
    width: 90%;

`
const Submit = styled.button`
    margin-top: 20px;
    border-radius: 3px;
    color: white;
    background: #568CE8;
    border: 1px;
    padding: 5px;

`