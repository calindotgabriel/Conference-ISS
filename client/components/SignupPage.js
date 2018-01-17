import React, { Component } from 'react';

import SignupForm from './SignupForm';

import { connect } from 'react-redux';
import { userSignupRequest } from '../actions/authActions';

class SignupPage extends Component {
    render() {
        // const { userSignupRequest } = this.props;
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <SignupForm userSignupRequest={userSignupRequest}/>
                </div>
            </div>
        );
    }
}



export default connect(null, { userSignupRequest })(SignupPage);