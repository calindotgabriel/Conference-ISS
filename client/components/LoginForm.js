import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextFieldGroup from './common/TextFieldGroup';

import { login } from '../actions/authActions';


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'admin',
            password: 'admin',
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    render() {
        const { errors, username, password } = this.state;

        return (
        <form onSubmit={this.onSubmit}>
            <h1>Login</h1>

            { errors && <div className="alert alert-danger">{errors.toString()}</div> }

            <TextFieldGroup
                field="username"
                label="Username / Email"
                value={username}
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
        // debugger;  
        this.props.login(this.state).then(  
            (res) => { 
                // debugger;
                this.context.router.history.push('/papers');
                console.log('Logged in as ' + res.data.username); 
                },
            (err) => this.setState({ errors: err.response.data.errors}));
    }
}

LoginForm.propTypes = {
    login: React.PropTypes.func.isRequired
}

LoginForm.contextTypes = {
    router : React.PropTypes.object.isRequired
}

export default connect(null, { login })(LoginForm);