import React, { Component } from 'react'
import { signup } from '../../services/auth';
import {GoogleLogin} from 'react-google-login'
import axios from 'axios';

export default class Signup extends Component {

  state = {
    email: '',
    password: '',
    message: ''
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    signup(email, password)
      .then(data => {
        if (data.message) {
          this.setState({
            message: data.message,
            email: '',
            password: ''
          })
        } else {
          // put the user in the state of App.js
          this.props.setUser(data);
          this.props.history.push('/login');
        }
      })
  }

  responseSuccessGoogle = (response) => {
    console.log(response);
    axios({
      method: 'POST',
      url: "http://localhost:5555/api/auth/google",
      data: {tokenId: response.tokenId}
    }).then(response => {
      console.log(response)
    })
  };

  responseFailureGoogle = (response) => {
    console.log(response)
  }

  render() {
    return (
      <>
        <h2>Signup</h2>
        <form onSubmit={this.handleSubmit}>
            <div className="">
            <label htmlFor='email'>Email: </label>
            <input
              type='text'
              name='email'
              id='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
           </div>

           <div className="">
            <label htmlFor='password'>Password: </label>
            <input
              type='password'
              name='password'
              id='password'
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          
          <div className="w-100 pa3 mr2">
          <button className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-black" type='submit'>Signup</button>
          </div>
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
    )
  }
}