import React, { Component } from 'react';
import axios from 'axios';

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        axios.post('/api/users', {user: this.state});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Join our community!</h1>

                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input type="text" name="username" className="form-control"
                           value={this.state.username} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input type="text" name="password" className="form-control"
                           value={this.state.password} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-lg">
                        Sign up
                    </button>
                </div>
            </form>
        );
    }
}

export default SignupForm;