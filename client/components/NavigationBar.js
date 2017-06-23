import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../actions/authActions';
import { connect } from 'react-redux';

import jwtDecode from 'jwt-decode';

class NavigationBar extends React.Component { 

    render() {
        const userLinks = (
        <ul className="nav navbar-nav navbar-right">
            <li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>
        </ul>
        );

        const guestLinks = (
        <ul className="nav navbar-nav navbar-right">
            <li><Link to="/login">Login</Link></li>
        </ul>
        );
        
        const isAuthenticated = localStorage.getItem('jwtToken') ;

        return (
        <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">Papers Fever as {jwtDecode(isAuthenticated).username}</Link> 
                    </div>
                </div>

                { isAuthenticated ? userLinks : guestLinks }

            </nav>
        </div>
    )
    }

    logout(e) {
        e.preventDefault();
        localStorage.removeItem('jwtToken');
        this.context.router.history.push('/');
        this.setState({})
    }
}

NavigationBar.propTypes = {
//   auth: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired
}


NavigationBar.contextTypes = {
    router : React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logout })(NavigationBar);

