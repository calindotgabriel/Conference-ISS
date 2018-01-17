import React from 'react';
import { Link } from 'react-router-dom';

import { isAuthenticated } from '../utils/auth'


class NavigationBar extends React.Component { 
    render() {
        const userLinks = (
            <div>
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#">Logout</a></li>
                </ul>
            </div>
        );
        const guestLinks = (
            <div>
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>

                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        );
        console.log('isAuth: ', isAuthenticated())
        return (
        <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">Conference</Link> 
                    </div>
                </div>
                
                {  localStorage.getItem('token') ? userLinks : guestLinks }

            </nav>
        </div>
    )
    }
    
}

export default NavigationBar;

