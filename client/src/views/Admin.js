import React from 'react';
import {
    Link
} from "react-router-dom";
const Admin = () => {
    return (
        <React.Fragment>
            <h1>Admin Panel</h1>
            <Link to='/admin/users'>Users</Link>
        </React.Fragment>
    )
}

export default Admin;