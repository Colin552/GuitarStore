import React, { useState } from 'react';
//import { LoginRequest } from './../API/APIRequests.js'
import { headerA } from "../API/header";
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

    let test = headerA;
    //console.log(test)

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
            if(json.user){
                dispatch({ type: "LOGIN"});
                localStorage.setItem('user',JSON.stringify(json.user));
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
            if(json.user){
                dispatch({ type: "LOGIN"});
                localStorage.setItem('user',JSON.stringify(json.user));
                history.push("/")
            }
        })
    }

    return (
        <React.Fragment>
            <h3>Login</h3>
            <form onSubmit={handleLogin}>
                <label>Email:
                    <input
                        type="text"
                        value={getEmailLogin}
                        onChange={e => setEmailLogin(e.target.value)}
                        required
                    />

                </label>
                <br />
                <label>Password:
                    <input
                        type="password"
                        value={getPasswordLogin}
                        onChange={e => setPasswordLogin(e.target.value)}
                        required
                    />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
            <br />
            <h3>Signup</h3>
            <form onSubmit={handleSignup}>
                <label>First Name:
                    <input
                        type="text"
                        value={getFirstNameSignup}
                        onChange={e => setFirstNameSignup(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>Last Name:
                    <input
                        type="text"
                        value={getLastNameSignup}
                        onChange={e => setLastNameSignup(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>Email:
                    <input
                        type="text"
                        value={getEmailSignup}
                        onChange={e => setEmailSignup(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>Password:
                    <input
                        type="password"
                        value={getPasswordSignup}
                        onChange={e => setPasswordSignup(e.target.value)}
                        required />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </React.Fragment>
    )
}

export default Login;