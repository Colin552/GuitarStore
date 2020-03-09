import React from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

const Account = () =>{

    const dispatch = useDispatch();
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('user'))

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        localStorage.removeItem('user');
        history.push("/");
    }

    return (
        <React.Fragment>
            <h1>My Account</h1>
            {user.firstName} {user.lastName}<br/>
            <button onClick={handleLogout}>Logout</button>
        </React.Fragment>
    )
}

export default Account;