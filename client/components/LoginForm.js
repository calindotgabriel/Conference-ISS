import React, { Component } from 'react';
import TextFieldGroup from './common/TextFieldGroup';

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

            { errors.form && <div className="alert alert-danger">{errors.form}</div> }

            <TextFieldGroup
                field="identifier"
                label="Username / Email"
                value={identifier}
                error={errors.identifier}
                onChange={this.onChange}
            />

            <TextFieldGroup
                field="password"
                label="Password"
                value={password}
                error={errors.password}
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
  }
}

export default LoginForm;