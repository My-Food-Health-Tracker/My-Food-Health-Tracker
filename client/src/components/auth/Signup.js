import React, { Component } from 'react'
// import { Form, Button, Alert } from 'react-bootstrap';
import { signup } from '../../services/auth';

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
          this.props.history.push('/main');
        }
      })
  }

  render() {
    return (
      <>
        <h2>Signup</h2>
        <form onSubmit={this.handleSubmit}>
          {/* <Form.Group> */}
            <label htmlFor='email'>Email: </label>
            <input
              type='text'
              name='email'
              id='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
          {/* </Form.Group> */}
          {/* <Form.Group> */}
            <label htmlFor='password'>Password: </label>
            <input
              type='password'
              name='password'
              id='password'
              value={this.state.password}
              onChange={this.handleChange}
            />
          {/* </Form.Group> */}
          {/* {this.state.message && (
            <Alert variant='danger'>{this.state.message}</Alert>
          )} */}
          <button type='submit'>Signup</button>
        </form>
      </>
    )
  }
}