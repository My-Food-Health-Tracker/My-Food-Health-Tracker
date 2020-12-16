import axios from 'axios'
import React, { Component } from 'react'

export default class IngreList extends Component {
  
  getThisDay = () => {
    axios.get(`/user/${this.props.user._id}/day/${this.props.date}`)
      .then(response => {
        console.log(response.data)
        this.setState({
          days: response.data
       })
      })
      .catch(err => {
        console.log(err.response)
      })
  }

  componentDidMount = () => {
    this.getThisDay()
  }
  
  render() {
    
    
    
    
    return (
      <div className="pa3 pa5-ns">
      <h1>hello</h1>
      {/* <ul className="list pl0 measure center">
      {
        thisDay.foods.ingredients.map( ingredient => {
          return (
            <li key={ingredient._id} key-data={ingredient._id} class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">{ingredient.name}, {ingredient.brand}, {ingredient.servingAmount} {ingredient.servingSize}</li>
          )
        })
      }
      </ul> */}
     </div>
    )
  }
}

