import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm  from './LoginForm'
import { userLoginRequest } from '../actions/authActions';

class LoginPage extends Component {
    render() {
        
        // const { userLoginRequest } = this.props;
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <LoginForm userLoginRequest={userLoginRequest}/>
                </div>
            </div>
        );
    }
}

export default LoginPage;
// export default connect(null, { userSignupRequest })(SignupPage);