import React, { Component } from 'react';

import { connect } from 'react-redux';
import { userLoginRequest } from '../actions/authActions';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'gelu',
            password: 'atlfel',
            errors: ''
        }
        this.onSubmit = this.onSubmit.bind(this);        
        this.onChange = this.onChange.bind(this);        
    }
    onSubmit(e) {
        e.preventDefault();
        console.log('onSubmit LoginForm')
        this.props.userLoginRequest(this.state).then(
            (res) => { localStorage.setItem('token', res.data.token)},
            (err) => { this.setState({ errors: err.response.data.error }) }
        );
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value});
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                 { this.state.errors && <div className="alert alert-danger"> {this.state.errors} </div> }
                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input type="text" name="username" className="form-control"
                           value={this.state.username} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input type="password" name="password" className="form-control"
                           value={this.state.password} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-lg">
                        Login
                    </button>
                </div>
            </form>
        );
    }
}

export default connect(null, {userLoginRequest})(LoginForm);