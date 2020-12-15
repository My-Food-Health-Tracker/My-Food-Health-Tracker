import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios';

export default class AddDay extends Component {

  state = {
   
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
      <form onSubmit={this.handleSubmit}>
        
        
          <label htmlFor='energy'>Energy: </label>
          <input
            type='text'
            id='energy'
            name='energy'
            value={this.state.energy}
            onChange={this.handleChange}
          />
       
        <button type='submit'>Add a Day</button>
      </form>
    )
  }
}