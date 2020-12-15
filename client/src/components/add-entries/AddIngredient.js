import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Icons from '../shared/Icons'


export default class AddIngredient extends Component {
  state = {
    date: '', startTime: '', servingAmount: '', servingSize: '',
    name : '', brand: '', category: '', portion: '', eatenPortion: '',
    ingredientCount: 0
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
    
    axios.post(`/api/ingredients/user/${this.props.user._id}/day/${this.state.date}`, payload)
      .then(() => {
        // set the form to it's initial state (empty input fields)
        this.setState({
          date: '',
          startTime: '',
          servingAmount: '',
          servingSize: '',
          name : '',
          brand: '',
          category: '',
          portion: '',
          eatenPortion: '',
          ingredientCount: ++this.state.ingredientCount
        })
        // update the parent components state (in Projects) by calling getData()
        // this.props.getData();
      })
      .catch(err => console.log(err))
  }
  
  render() {
    const recipeUnit = ['pound', 'ounce', 'mg', 'g', 'kg', 'tsp', 'tbl', 'fl oz', 'gill', 'cup', 'gallon', 'ml', 'l', 'dl']
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="date-time">
            <label htmlFor="date" className="f6 mt3">Date:</label>
            <input type="date" id="date"
                  name="date" 
              onChange={this.handleChange}
                  // min="2010-01-01" max="2030-01-01"
            />
            <label htmlFor="startTime" className="f6 mt3">Time:</label>

            <input type="time" id="startTime"
                name="startTime" 
              onChange={this.handleChange}
                // min="2010-01-01T00:00" max="2030-01-01T00:00"
            />
          </div>

          {/* <div className="portion"> 
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
          </div> */}

          <div className="custom-ingredient"
          style={{"display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center"}}>
          <div>
            <div style={{"display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center"}}>
            <label htmlFor='name'  className="f6 mt3" >Name: </label>
            <input
              type='text'
              id='name'
              name='name' value={this.props.name}
              onChange={this.handleChange}
            />
          </div>
          <div style={{"display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center"}}>
            <label htmlFor='brand' className="f6 mt3">Brand: </label>
            <input 
              type='text'
              id='brand'
              name='brand'
              value={this.props.brand}
              onChange={this.handleChange}
            />
          </div>
          <div style={{"display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center"}}>
          <label htmlFor='category' className="f6 mt3">Category: </label>
            <input type='text' id='category' name='category'
              value={this.props.category}
              onChange={this.handleChange}
            /> 
            </div>
            </div>
          <div>
            <div>
              <label htmlFor='servingAmount' className="f6 mt3">Amount: </label>
              <input 
                type='number'
                id='servingAmount'
                name='servingAmount'
                min='0'
                value={this.state.servingAmount}
                onChange={this.handleChange}
              />
              <select id='servingSize' name='servingSize' value={this.state.servingSize} onChange={this.handleChange}>
              <option className="f6 mt3" value="">--unit--</option>
              {
                recipeUnit.map(unit => {
                    return (
                      <option value={unit}>{unit}</option>
                    )
                })
              }
              </select>
            </div>
              </div>
          </div>
        
        <button type='submit' className="f6 link dim br-pill ba ph3 pv2 mb2 dib dark-blue">Save</button>
      </form>

      <Link className="link blue hover-silver dib mh3 tc" style={{
            "display": "flex", "flexDirection":"row", "justifyContent": "center", "alignItems":"center"}}>
          <Icons icon="FoodsDetails"/>
          <span className="f6 db" style={{"marginLeft": "10px"}}>{this.state.ingredientCount} ingredients added</span>
          </Link>
      </div>
    )
}
}