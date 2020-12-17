import axios from 'axios'
import React, { Component } from 'react'

export default class IngreList extends Component {

  state = {
    user: this.props.user,
    allDays: []
  }

  getAllDays = () => {
    console.log("prop", this.props);
    axios.get(`/api/days/user/${this.props.user._id}`)
    .then(response => {
      console.log("hier kommt die antowork")
      console.log(response.data)
      this.setState({
        allDays: response.data
      })
    })
  }

  componentDidMount = () => {
    this.getAllDays();
  }

  render() {
    
   console.log(this.state.allDays)
    const filteredDays = this.state.allDays.filter(mydays => 
      mydays.owner._id === this.state.user._id
    )
    console.log("so schaut ein tag aus");
    console.log(filteredDays[0])
    
    return (
      <div className="pa3 pa5-ns">
      <h1>You foods comsumptions in last </h1>
      <ul className="list pl0 measure center">
      {
        filteredDays.map(day => {
          return (
            <li key={day.foods._id} key-data={day.foods._id} class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
             {day.foods.name} {day.foods.startTime} 
            </li>
          )
        })
      }
      </ul>
     </div>
    )
  }
}

