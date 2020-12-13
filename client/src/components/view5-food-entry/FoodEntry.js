import axios from 'axios'
import React, { Component } from 'react'
import TopNav from './TopNav'
import TimeForm from './TimeForm'

export default class FoodEntry extends Component {
  state = {
    // this is the loggedin user from App.js
    user: this.props.setUser,
    days: []
  }

  // test: show the days of this loggedin user

  // step 1: get all the days from the server
  // getAllDays = () => {
  //   axios.get('/api/days')
  //    .then(response => {
  //      console.log(response);
  //      this.setState({
  //         days: response.data
  //      })
  //    })
  //    .catch(err => {
  //      console.log(err.response)
  //    })
  // }

  // componentDidMount = () => {
  //   this.getAllDays()
  // }

  render() {
    
    if (!this.state.days) return <h1>Loading...</h1>
    return (
      <div>
        <TopNav /> 
        <TimeForm />
        <button>Single Ingredient</button>
        <button>Single Ingredient</button>
        
        
      </div>
    )
  }
}
