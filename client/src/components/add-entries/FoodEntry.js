import axios from 'axios';
import React, { Component } from 'react';
import TopBar from '../shared/TopBar';
import AddIngredient from '../view5-food-entry/AddIngredient';
import BottomNavbar from '../shared/BottomNavbar';
import Icons from '../Icons';
import { Link } from 'react-router-dom';

export default class FoodEntry extends Component {
  state = {
    // this is the loggedin user from App.js
    user: this.props.user,
    days: [],
    ingredients: [],
    name: '',
    brand: '',
    category: '',
    selectedIngredient: false,
    showCustomIngredient: false,
    showExistIngredient: false,
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

  handleCustomIngredient = () => {
    this.setState({
      showCustomIngredient: !this.state.showCustomIngredient,
      // showCustomIngredient: true,
    })
  }

  render() {
    
    if (!this.state.days) return <h1>Loading...</h1>
    console.log('this is the user in foodentry', this.state.user)
    return (
      <div>
      
        <TopBar icon="Foods" title="Foods"/> 

      {/* Two buttons for single ingredient and recipe */}
        <button className="f6 link dim br-pill ba ph3 pv2 mb2 mv1 dib dark-blue">
          Single Ingredient
        </button>
        <button className="f6 link dim br-pill ba ph3 pv2 mb2 mv1 dib dark-blue">
          Recipe
        </button>
      
      {/* Search bar */}
        <form>
          <input 
            type="search"
            name="search"
            placeholder="Search for..."
          />
        </form>

        {/* show the ingredients in database */}
        <div classname="f4 bold center mw5" >
          <ul className="list pl0 ml0 center mw5 ba b--light-silver br3" style={{"height":"200px", "width": "60%", "overflow": "hidden", "overflowY": "scroll"}} >
          {
            this.state.ingredients.map(ingredient => {
              return (
                
                <li onClick={this.handleClick} key={ingredient._id} data-key={ingredient._id} className="ph3 pv2 bb b--light-silver f6 db">
                  {ingredient.name}, {ingredient.brand} <button>+</button>
                  {/* <Icons icon="AddButton-database"/> */}
                </li>
              )
            })
          }
          </ul>
        </div>
        
        {/* clickable button for "Didn't find your ingredient?" should show a form*/}
        
        <div onClick={this.handleCustomIngredient} className="link blue hover-silver dib mh3 tc" style={{
            "display": "flex", "flexDirection":"row", "justifyContent": "center", "alignItems":"center"}}>
          <Icons icon="AddButton"/>
          <span className="f6 db" style={{"marginLeft": "10px"}}>Didn't find your ingredient? </span>
        </div>

          <div>
          {
          this.state.showCustomIngredient &&
           
              <div>
              <h3 className="f6 db">Custom Ingredient:</h3>

              <AddIngredient user={this.state.user} {...this.state} handleClick={this.handleClick}/>
          </div>
          }
          </div>

        {/* Bottom navbar */}
        <BottomNavbar />
      </div>
    )
  }
}
