import React, { Component } from 'react';
import { login } from '../../services/auth';
import { GoogleLogin } from 'react-google-login';
import Icons from '../Icons'

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
        // this.props.history.push('/dashboard');
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
      <div style={{"height": "700px","display": "flex", "flexDirection": "column", "justifyContent": 'center', "alignItems": "center"}}>
        <nav className='ba blue pv2 w-100 fixed top-2' style={{"marginBottom": "10px"}}>
          <div className="link blue hover-silver dib mh3 tc" style={{
            "display": "flex", "flexDirection":"row", "justifyContent": "center", "alignItems":"center"}}>
            
            <Icons icon='health-icon'/>
            <span class="f6 db">My Health Diary</span>
          </div>
      </nav>
        <h2 className="f10 dark-blue">Login</h2>
        <form onSubmit={this.handleSubmit}>
        <div>
            <label htmlFor='email'>Email: </label>
            <input
              type='text'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
              id='email'
            />
          </div>
         <div>
            <label htmlFor='password'>Password: </label>
            <input
              type='password'
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
              id='password'
            />
          </div>

          <div className="w-100 pa3 mr2">
          <button className="f6 link dim br-pill ba bw1 ph3 pv2 mb2 dib dark-blue" type='submit'>Login</button>
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
      </div>
    );
  }
}