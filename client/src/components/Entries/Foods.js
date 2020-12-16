import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Foods extends Component {
  state = {
    foods: this.props.foods || []
  }

  componentDidMount (){
    this.setState({
      foods: this.props.foods
    })
  }

  render() {
    console.log(this.props.foods)
    return (
      
      <article className="mw6 center br3 ba b--light-blue bg-white mb1" style={{height: 'auto'}}>
        {this.props.foods.map(food => (
          <div className="dt-ns dt--fixed-ns w-100">
          <div className="pa1 pa3-ns dtc-ns v-mid">
                  <h3 className="fw4 blue mt0 mb0">You ate: {food.ingredients.map(ingredient => (<li key={ingredient}>{ingredient}</li>))}</h3>
                  <span className="pa3 pa4-ns dtc-ns v-mid">
                <Link to={{pathname: '/add/Foods', state:{ foods: food, editing: true, day:this.props.day}}} className="center no-underline f6 tc db w-20 pv1 bg-animate bg-blue hover-bg-dark-blue white br2" >Edit</Link>
              </span>
              </div>
          </div>
        ))}
      </article>
    )
  }
}
