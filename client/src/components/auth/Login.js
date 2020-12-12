import React, { Component } from 'react';
import { login } from '../../services/auth';
import { GoogleLogin } from 'react-google-login';

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    message: ''
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { email, password } = this.state;

    login(email, password).then(data => {
      if (data.message) {
        this.setState({
          message: data.message,
          email: '',
          password: ''
        });
      } else {
        // successfully logged in
        // update the state for the parent component
        this.props.setUser(data);
        this.props.history.push('/initial-diary');
      }
    });
  };


  responseSuccessGoogle = (response) => {
    console.log(response)
  };
  responseFailureGoogle = (response) => {
    console.log(response)
  }

  render() {
    return (
      <>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor='email'>Email: </label>
            <input
              type='text'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
              id='email'
            />
          
         
            <label htmlFor='password'>Password: </label>
            <input
              type='password'
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
              id='password'
            />
          
          <button className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-light-purple" type='submit'>Login</button>
        </form>

        <div>
        <GoogleLogin
            clientId="1030428239425-h5l4joog9bknfmisj0it01l8thqh0lln.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={this.responseSuccessGoogle}
            onFailure={this.responseFailureGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>
      </>
    );
  }
}