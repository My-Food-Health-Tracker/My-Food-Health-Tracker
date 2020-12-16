import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

export default class ShowIngredientsOfDay extends Component {

  state = {
    ingredients: [],
    ingredientsOfDay: [],
    date: '',
    startTime: '',
    name: '',
    brand: '',
    category: '', servingAmout: '', servingSize: '', portion: '', eatenPortion: '',
  }

  getIngredientsDay = () => {
    axios.get(`/api/ingredients/user/${this.props.user._id}/day/${this.state.date}/ingredients`)
     .then(response => {
       console.log(response.data)
       this.setState({
        ingredientsOfDay: response.data
     })
     })
     .catch(err => {
      console.log(err.response)
    })
  }

  render() {
    return (
      <div>
        <ul className="list pl0 ml0 center mw5 ba b--light-silver br3" >
          {
            this.props.ingredientsOfDay.map(ingredient => {
              return (
                <li className="ph3 pv2 bb b--light-silver f6 db">
                  {ingredient.name}, {ingredient.brand} <button onSubmit={this.handleEdit} key={ingredient._id} data-key={ingredient._id}>Edit</button> <button onSubmit={this.handleDelete} key={ingredient._id} data-key={ingredient._id}>Delete</button>
                  {/* <Icons icon="AddButton-database"/> */}
                </li>
              )
            })
          }
          </ul>
      </div>
    )
  }
}
