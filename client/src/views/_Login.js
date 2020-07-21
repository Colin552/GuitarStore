import React, { useState } from 'react';
import styled from 'styled-components'
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

const Login = () => {

    const [getEmailLogin, setEmailLogin] = useState("");
    const [getPasswordLogin, setPasswordLogin] = useState("");
    const [getEmailSignup, setEmailSignup] = useState("");
    const [getPasswordSignup, setPasswordSignup] = useState("");
    const [getFirstNameSignup, setFirstNameSignup] = useState("");
    const [getLastNameSignup, setLastNameSignup] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();


    const handleLogin = (event) => {
        event.preventDefault();

        fetch('http://localhost:3000/users/login', {
            method: 'POST',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },

            //headers: header,
            body: JSON.stringify({
                email: getEmailLogin,
                password: getPasswordLogin
            })
        })
            .then(res => res.json())
            .then(json => {
                if (json.user) {
                    dispatch({ type: "LOGIN" });
                    localStorage.setItem('user', JSON.stringify(json.user));

                    fetch('http://localhost:3000/shopping-cart/user/' + json.user.id, {
                        method: 'GET',
            
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        }
                    })
                        .then(res => res.json())
                        .then(json => { 
                            localStorage.setItem('cartProducts', JSON.stringify(json))
                        })
                        

                    history.push("/")
                }
            })


    }
    const handleSignup = (event) => {
        event.preventDefault();

        fetch('http://localhost:3000/users/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: getEmailSignup,
                password: getPasswordSignup,
                firstName: getFirstNameSignup,
                lastName: getLastNameSignup
            })
        })
            .then(res => res.json())
            .then(json => {
                console.log(json)
                if (json.user) {
                    dispatch({ type: "LOGIN" });
                    localStorage.setItem('user', JSON.stringify(json.user));
                    history.push("/")
                }
            })
    }

    return (
        <React.Fragment>
            <Title>Login</Title>
            <Form onSubmit={handleLogin}>
                <Input
                    placeholder="Email"
                    value={getEmailLogin}
                    onChange={e => setEmailLogin(e.target.value)}
                    required></Input>
                <br />
                <Input
                    placeholder="Password"
                    type="password"
                    value={getPasswordLogin}
                    onChange={e => setPasswordLogin(e.target.value)}
                    required
                ></Input>
                <br />
                <Submit type="submit">Submit</Submit>
            </Form>

            <Title>Signup</Title>
            <Form onSubmit={handleSignup}>
                <Input
                    placeholder="First Name"
                    type="text"
                    value={getFirstNameSignup}
                    onChange={e => setFirstNameSignup(e.target.value)}
                    required
                ></Input>
                <br />
                <Input
                    placeholder="Last Name"
                    value={getLastNameSignup}
                    onChange={e => setLastNameSignup(e.target.value)}
                    required
                ></Input>
                <br />
                <Input
                    placeholder="Email"
                    value={getEmailSignup}
                    onChange={e => setEmailSignup(e.target.value)}
                    required
                ></Input>
                <br />
                <Input
                    placeholder="Password"
                    type="password"
                    value={getPasswordSignup}
                    onChange={e => setPasswordSignup(e.target.value)}
                    required 
                ></Input>
            <br />
            <Submit>Submit</Submit>
            </Form>
        </React.Fragment >
    )
}

export default Login;

const Title = styled.h3`
    margin-top: 10px;
`
const Form = styled.form`

`

const Submit = styled.button`

    margin-top: 20px;
    border-radius: 3px;
    color: white;
    background: #568CE8;
    border: 1px;
    padding: 5px;

`

const Input = styled.input`
    padding: 5px;
    border-radius: 3px;
    margin-top: 20px;
    width: 200px;
`
