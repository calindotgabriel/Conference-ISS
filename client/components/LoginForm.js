import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextFieldGroup from './common/TextFieldGroup';

import { login } from '../actions/login';


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            identifier: '',
            password: '',
            errors: {}
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    render() {
        const { errors, identifier, password } = this.state;

        return (
        <form onSubmit={this.onSubmit}>
            <h1>Login</h1>

            { errors && <div className="alert alert-danger">{errors}</div> }

            <TextFieldGroup
                field="identifier"
                label="Username / Email"
                value={identifier}
                onChange={this.onChange}
            />

            <TextFieldGroup
                field="password"
                label="Password"
                value={password}
                onChange={this.onChange}
                type="password"
            />

            <div className="form-group"><button className="btn btn-primary btn-lg">Login</button></div>
      </form>         
        );
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState( { errors: {} })
        this.props.login(this.state).then(  
            (res) => this.context.router.push('/'),
            (err) => this.setState({ errors: err.response.data.errors}));
    }
}

LoginForm.contextTypes = {
    router : React.PropTypes.object.isRequired
}

export default connect(null, { login })(LoginForm);