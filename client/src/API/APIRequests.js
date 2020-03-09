
//import { useDispatch } from "react-redux";
//import { useHistory } from 'react-router-dom';

const baseUrl = "http://localhost:3000";

export const LoginRequest = (_email, _password) => {

    return fetch (baseUrl + '/users/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: _email,
            password: _password
        })
    })
    .then(res => res.json())
    .then (json => {
        console.log()
        localStorage.setItem('user', JSON.stringify(json.user));
    });

    /*
    const dispatch = useDispatch();
    const history = useHistory();
    fetch(baseUrl + '/users/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: _email,
            password: _password
        })
    })
        .then(res => res.json())
        .then(json => {
            if (json.user) {
                dispatch({ type: "LOGIN" });
                localStorage.setItem('user', JSON.stringify(json.user));
                history.push("/")
            }
        })
        */
}
