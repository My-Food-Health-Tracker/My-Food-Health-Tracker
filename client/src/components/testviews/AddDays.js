import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios';

export default class AddDay extends Component {

  state = {
    date: '',
    owner: this.props.user,
    foods: [],
    drinks: [],
    supplements: [],
    medications: [],
    exercises: [],
    sleep: [],
    symptoms: [],
    energy: 0
  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state);
    console.log(this.state);

    axios.post('/api/days', {
      date: this.state.date,
      energy: this.state.energy,
    })
      .then(() => {
        // set the form to it's initial state (empty input fields)
        this.setState({
          date: '',
          energy: 0
        })
        // update the parent components state (in Projects) by calling getData()
        // this.props.getData();
      })
      .catch(err => console.log(err))

  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor='title'>Date: </Form.Label>
          <Form.Control
            type='text'
            id='date'
            name='date'
            value={this.state.date}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='energy'>Energy: </Form.Label>
          <Form.Control
            type='text'
            id='energy'
            name='energy'
            value={this.state.energy}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button type='submit'>Add a Day</Button>
      </Form>
    )
  }
}