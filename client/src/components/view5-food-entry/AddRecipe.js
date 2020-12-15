import React, { Component } from 'react'
import axios from 'axios'


export default class AddIngredient extends Component {
  state = {
    date: '',
    startTime: '',
    servingAmount: 0,
    servingSize: 0,
    name : '',
    brand: '',
    category: '',
    portion: '',
    eatenPortion: ''
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
    
    axios.post(`/user/${this.props.user._id}/day/${this.state.date}`, payload)
      .then(() => {
        // set the form to it's initial state (empty input fields)
        this.setState({
          date: '',
          startTime: '',
          servingAmount: 0,
          servingSize: '',
          name : '',
          brand: '',
          category: '',
          portion: '',
          eatenPortion: ''
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

          <div className="portion"> 
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
          </div>

          <div className="details">
            <label htmlFor='name'>Name: </label>
            <input
              type='text'
              id='name'
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
            />
        
            <label htmlFor='brand'>Brand: </label>
            <input
              type='text'
              id='brand'
              name='brand'
              value={this.state.brand}
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

        <label htmlFor='servingAmount'>Serving Amount: </label>
              <input
                type='number'
                id='servingAmount'
                name='servingAmount'
                value={this.state.servingAmount}
                onChange={this.handleChange}
              />
          
              <label htmlFor='servingSize'>Serving Size: </label>
              <input
                type='text'
                id='servingSize'
                name='servingSize'
                value={this.state.servingSize}
                onChange={this.handleChange}
              />
          </div>
        
        <button type='submit'>Save</button>
      </form>
      </div>
    )
}
}