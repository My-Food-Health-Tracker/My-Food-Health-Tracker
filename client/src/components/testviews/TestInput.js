import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios';

export default class TestInput extends Component {

  state = {
    allUsers: [],      // all users existing in the database
    owner: '',     // specific user we are going to use for the information creation
    signedInUser: '',     // currently logged in user (once the sign up function works)  
    date: '',
    foods: [{
      startTime: ''
    }],
    error: null
  }

  // Use this function to populate the all users field with all existing users
  // for Admin and development purposes only!!!!
  getData = () => {
        axios.get(`/api/users`)
          .then(response => {
            // console.log(response);
            this.setState({
              allUsers: response.data
            })
          })
          .catch(err => {
            console.log(err.response)
            if (err.response.status === 404) {
              this.setState({
                error: 'Sorry - No users found 🤷‍♀️ 🤷‍♂️'
              })
            }
          })
      }

  componentDidMount = () => {
    this.getData();
  }


  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value)
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state);
    console.log(this.state);
    // axios.post('/api/projects', {
    //   title: this.state.title,
    //   description: this.state.description
    // })
    //   .then(() => {
    //     // set the form to it's initial state (empty input fields)
    //     this.setState({
    //       title: '',
    //       description: ''
    //     })
    //     // update the parent components state (in Projects) by calling getData()
    //     this.props.getData();
    //   })
    //   .catch(err => console.log(err))

  }
  render() {
    return (
      <div>
      <h2>Please create a daily entry</h2>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor='date'>Date: </Form.Label>
          <Form.Control
            type='date'
            id='date'
            name='date'
            value={this.state.date}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
        <Form.Label htmlFor='owner'>Owner: </Form.Label>
        <select name="owner" id="owner" onChange={this.handleChange}>
        <option key='0'>Select an owner...</option>
        {this.state.allUsers.map(user => 
        <option key={user._id} value={user._id}>{user.username}</option>)}
        </select>
        </Form.Group>
        <h3>Please add below what you have consumed (BETA: only foods)</h3>
        <Form.Group>
          <Form.Label htmlFor='startTime'>Consumption time: </Form.Label>
          <Form.Control
            type='date'
            id='startTime'
            name='foods.startTime'
            value={this.state.foods[0].startTime}
            onChange={this.handleChange}
          />
          <Form.Label htmlFor='foods.name'>Name of the food:</Form.Label>
          <Form.Control
            type='text'
            id='startTime'
            name='foods.name'
            value={this.state.foods[0].name}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button type='submit'>Add an entry</Button>
      </Form>
      </div>
    )
  }
}
