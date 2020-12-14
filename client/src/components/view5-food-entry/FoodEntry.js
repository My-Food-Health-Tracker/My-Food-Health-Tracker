import axios from 'axios'
import React, { Component } from 'react'
import TopNav from './TopNav'
import AddIngredient from './AddIngredient'

export default class FoodEntry extends Component {
  state = {
    // this is the loggedin user from App.js
    user: this.props.user,
    days: [],
    showForm: false,
    startDate: '',
    startTime: '',
    ServingAmount: 0,
    ServingSize: '',
    name: '',
    brand: '',
    category: ''
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
    console.log('this is the user in foodentry', this.state.user)
    return (
      <div>
        <TopNav /> 
        {/* <TimeForm /> */}
        <button>Single Ingredient</button>
        <button>Single Ingredient</button>

        <form>
          <input 
            type="search"
            name="search"
            placeholder="Search for..."
            // value={}
            // onClick={}
            // onChange={}
          />
        </form>
        
        <h3>Ingredient:</h3>
        <AddIngredient user={this.state.user}/>
        
      </div>
    )
  }
}
