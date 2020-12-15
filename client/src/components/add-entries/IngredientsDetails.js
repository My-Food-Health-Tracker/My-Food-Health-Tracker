import React, { Component } from 'react'

export default class IngredientsDetails extends Component {
  

  
  render() {
    return (
      <div className="ingredients-details">
          <form>
            <input
              type='text'
              id='name'
              name='name'
              placeholder="chicken"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <input
              type='number'
              id='servingAmount'
              name='servingAmount'
              placeholder="500"
              value={this.state.servingAmount}
              onChange={this.handleChange}
            />

          
            <input
              type='text'
              id='servingSize'
              name='servingSize'
              placeholder="g"
              value={this.state.servingSize}
              onChange={this.handleChange}
            /> 
            </form>
          </div>
    )
  }
}