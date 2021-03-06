import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Account = () => {

    const [getFirstName, setFirstName] = useState("");
    const [getLastName, setLastName] = useState("");
    const [getAddress, setAddress] = useState("");
    const [getApartment, setApartment] = useState("");
    const [getCity, setCity] = useState("");
    const [getCountry, setCountry] = useState("");
    const [getProvince, setProvince] = useState("");
    const [getPostal, setPostal] = useState("");
    
    const dispatch = useDispatch();
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(() =>{
        fetch('http://localhost:3000/users/' + user.id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': user.token
            },
        })
            .then(res => res.json())
            .then(json => {
                setFirstName(json.first_name)
                setLastName(json.last_name)
                if(json.city){
                    setCity(json.city)
                }
                if(json.address){
                    setAddress(json.address)
                }
                if(json.apartment){
                    setApartment(json.apartment)
                }
                if(json.country){
                    setCountry(json.country)
                }
                if(json.province){
                    setProvince(json.province)
                }
                if(json.postal){
                    setPostal(json.postal)
                }
            })
    },[])




    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        localStorage.removeItem('user');
        localStorage.removeItem('cartProducts');
        history.push("/");
    }

    const handleUpdate = (e) => {

        fetch('http://localhost:3000/users/', {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': user.token
            },
            body: JSON.stringify({
                id: user.id,
                first_name: getFirstName,
                last_name: getLastName,
                address: getAddress,
                apartment: getApartment,
                city: getCity,
                province: getProvince,
                country: getCountry,
                postal: getPostal
            })
        })
    }

    return (
        <React.Fragment>
            <Title>My Account</Title>
            <br />
            <p>My Info</p>

            <form onSubmit={handleUpdate}>
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
                <Submit>Update</Submit>
            </form>
            <br />
            <Submit onClick={handleLogout}>Logout</Submit>
            <br /><br />
            <h3>My Orders</h3>
            <Orders>
                <Order>
                    <OrderProduct></OrderProduct>
                </Order>
            </Orders>
        </React.Fragment>
    )
}

export default Account;

const Title = styled.h3`
    margin-top: 10px;
`

const Orders = styled.div`

`

const Order = styled.div`
`

const OrderProduct = styled.div`

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