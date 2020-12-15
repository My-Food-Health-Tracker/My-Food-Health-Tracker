import axios from 'axios';
import React, { Component } from 'react';
import TopBar from '../shared/TopBar';
import BottomNavbar from '../shared/BottomNavbar';
import Icons from '../shared/Icons';
import { Link } from 'react-router-dom';

export default class AddDrinks extends Component {

  state = {
    user: this.props.user,
    days: [],
    ingredients: [],
    name: '',
    brand: '',
    category: '',
    date: '',
    startTime: '',
    servingAmount: '',
    servingSize: '',
    selectedIngredient: false,
    ingredientCount: 0
  }

  // show all the ingredients in database
  getAllIngredients = () => {
    axios.get('/api/ingredients')
     .then(response => {
       console.log(response.data);
       this.setState({
          ingredients: response.data
       })
     })
     .catch(err => {
       console.log(err.response)
     })
  }

  componentDidMount = () => {
    this.getAllIngredients()
  }

  handleClick = event => {
    const key = event.target.getAttribute('data-key')
    console.log(key);
    console.log('this.state.ingredients is:', this.state.ingredients)
    const clickedIngredient = this.state.ingredients.filter(ingredient => {
      return ingredient._id === key;
    });
    console.log(clickedIngredient[0])
    this.setState ({
      name: clickedIngredient[0].name,
      brand: clickedIngredient[0].brand,
      category: clickedIngredient[0].category
    })

  }

  // handleCustomIngredient = () => {
  //   this.setState({
  //     showCustomIngredient: !this.state.showCustomIngredient,
  //     // showCustomIngredient: true,
  //   })
  // }

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
    
    axios.post(`/api/ingredients/drinks/user/${this.props.user._id}/day/${this.state.date}`, payload)
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
          ingredientCount: ++this.state.ingredientCount
        })
        // update the parent components state (in Projects) by calling getData()
        // this.props.getData();
      })
      .catch(err => console.log(err))
  }

  render() {
    
    if (!this.state.ingredients) return <h1>Loading...</h1>
    console.log('this is the user in foodentry', this.state.user)
    return (
      // <div>
      //   <h1>Hello</h1>
      // </div>
      <div>
      {/* Top Navbar */}
        <TopBar icon="Drinks" /> 
​
      {/* Two buttons for single ingredient and recipe */}
        <button className="f6 link dim br-pill ba ph3 pv2 mb2 dib dark-blue" 
        style={{"marginRight": "5px"}}>Add a Drink</button>
      
      {/* Search bar */}
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
​
        {/* show the drinks ingredients in database */}
        <div classname="f4 bold center mw5" >
          <ul className="list pl0 ml0 center mw5 ba b--light-silver br3" style={{"height":"200px", "width": "60%", "overflow": "hidden", "overflowY": "scroll"}} >
          {
            this.state.ingredients.map(ingredient => {
              return (
                
                <li className="ph3 pv2 bb b--light-silver f6 db">
                  {ingredient.name}, {ingredient.brand} <button onClick={this.handleClick} key={ingredient._id} data-key={ingredient._id}>+</button>
                  {/* <Icons icon="AddButton-database"/> */}
                </li>
              )
            })
          }
          </ul>
        </div>
        
        {/* clickable button for "Didn't find your ingredient?" should show a form*/}
        
        {/* <div className="link blue hover-silver dib mh3 tc" style={{
            "display": "flex", "flexDirection":"row", "justifyContent": "center", "alignItems":"center"}}>
          <Icons icon="AddButton"/>
          <span className="f6 db" style={{"marginLeft": "10px"}}>Didn't find your ingredient? </span>
        </div> */}
          <div>
          <h3 className="f6 db">Custom Your Drink:</h3>
​
          <div>
       
        <form onSubmit={this.handleSubmit}>
​
          <div className="date-time">
​
            <label htmlFor="date">Date:</label>
            <input type="date" id="date"
                  name="date" 
              onChange={this.handleChange}
                  // min="2010-01-01" max="2030-01-01"
            />
            <label htmlFor="startTime">Time:</label>
​
            <input type="time" id="startTime"
                name="startTime" 
              onChange={this.handleChange}
                // min="2010-01-01T00:00" max="2030-01-01T00:00"
            />
          </div>
​
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
​
          <div className="custom-ingredient"
          style={{"display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center"}}>
          <div>
            <div style={{"display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center"}}>
            <label htmlFor='name'  className="db fw4 lh-copy f6">Name: </label>
            <input
              type='text'
              id='name'
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div style={{"display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center"}}>
            <label htmlFor='brand' className="db fw4 lh-copy f6">Brand: </label>
            <input 
              type='text'
              id='brand'
              name='brand'
              value={this.state.brand}
              onChange={this.handleChange}
            />
          </div>
          <div style={{"display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center"}}>
          <label htmlFor='category' className="db fw4 lh-copy f6">Category: </label>
            <input 
              type='text'
              id='category'
              name='category'
              value={this.state.category}
              onChange={this.handleChange}
            /> 
            </div>
            </div>
          <div>
            <div>
              <label htmlFor='servingAmount' className="db fw4 lh-copy f6">Serving Amount: </label>
              <input 
                type='number'
                id='servingAmount'
                name='servingAmount'
                value={this.state.servingAmount}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor='servingSize' className="db fw4 lh-copy f6">Serving Size: </label>
              <input 
                type='text'
                id='servingSize'
                name='servingSize'
                value={this.state.servingSize}
                onChange={this.handleChange}
              />
              </div>
              </div>
          </div>
        
        <button type='submit' className="f6 link dim br-pill ba ph3 pv2 mb2 dib dark-blue">Save</button>
      </form>
​
      <Link className="link blue hover-silver dib mh3 tc" style={{
            "display": "flex", "flexDirection":"row", "justifyContent": "center", "alignItems":"center"}}>
          <Icons icon="FoodsDetails"/>
          <span className="f6 db" style={{"marginLeft": "10px"}}>{this.state.ingredientCount} drinks added</span>
          </Link>
      </div>
          </div>
        {/* Bottom navbar */}
        <BottomNavbar />
      </div>
    )
  }
}

