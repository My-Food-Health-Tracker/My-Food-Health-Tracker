import React, { Component } from 'react'
import axios from 'axios'
import IngredientsDetails from './IngredientsDetails';


export default class AddRecipe extends Component {
  state = {
    date: '',
    startTime: '',
    servingAmount: 0,
    servingSize: 0,
    name : '',
    brand: '',
    category: '',
    portion: '',
    eatenPortion: '',
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
    
    // current Date as object
    
    const payload = this.state;
    console.log(payload);
    console.log(this.state.date)
    
    axios.post(`api/recipe/user/${this.props.user._id}/day/${this.state.date}`, payload)
      .then(() => {
        // set the form to it's initial state (empty input fields)
        this.setState({
          date: '',
          startTime: '',
          foodsname : '',
          portion: '',
          eatenPortion: '',
          ingredientsName: '',
          brand: '',
          category: '',
          servingAmount: 0,
          servingSize: '',
          ingredients: []
        })
        // update the parent components state (in Projects) by calling getData()
        // this.props.getData();
      })
      .catch(err => console.log(err))
  }
  
  render() {
    return (
      <div>
       
        <form onSubmit={this.handleSubmit}>

          <div className="date-time">

            <label htmlFor="date">Date:</label>
            <input type="date" id="date"
                  name="date" 
              onChange={this.handleChange}
                  // min="2010-01-01" max="2030-01-01"
            />
            <label htmlFor="startTime">Time:</label>

            <input type="time" id="startTime"
                name="startTime" 
              onChange={this.handleChange}
                // min="2010-01-01T00:00" max="2030-01-01T00:00"
            />
          </div>

          <div className="recipe-infos"> 

          <label htmlFor='name'>Recipename: </label>
            <input
              type='text'
              id='name'
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
            />
        
            <label htmlFor='portion'>Portion: </label>
                <input
                  type='number'
                  id='portion'
                  name='portion'
                  value={this.state.portion}
                  onChange={this.handleChange}
                />
            
            <label htmlFor='eatenPortion'>How much did you eat? </label>
            <input
              type='number'
              id='eatenPortion'
              name='eatenPortion'
              value={this.state.eatenPortion}
              onChange={this.handleChange}
            />
            
            <label htmlFor='category'>Category: </label>
            <input
              type='text'
              id='category'
              name='category'
              value={this.state.category}
              onChange={this.handleChange}
            /> 
          </div>

          <IngredientsDetails />
        
        <button type='submit'>Save</button>
      </form>
      </div>
    )
}
}