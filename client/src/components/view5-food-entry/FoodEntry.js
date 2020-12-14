import axios from 'axios';
import React, { Component } from 'react';
import TopNav from './TopNav';
import AddIngredient from './AddIngredient';
import BottomNavBar from '../BottomNavbar';
import Icons from '../Icons';
import { Link } from 'react-router-dom';

export default class FoodEntry extends Component {
  state = {
    // this is the loggedin user from App.js
    user: this.props.user,
    days: [],
    showIngredients: false,
    ingredients: []
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

  render() {
    
    if (!this.state.days) return <h1>Loading...</h1>
    console.log('this is the user in foodentry', this.state.user)
    return (
      <div>
        <TopNav /> 
        {/* <TimeForm /> */}
        <button className="f6 link dim br-pill ba ph3 pv2 mb2 dib dark-blue" style={{"marginRight": "5px"}}>Single Ingredient</button>
        <button className="f6 link dim br-pill ba ph3 pv2 mb2 dib dark-blue" style={{"marginLeft": "5px"}}>Recipe</button>

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

        <div classname="f4 bold center mw5" >
          <ul className="list pl0 ml0 center mw5 ba b--light-silver br3" style={{"height":"200px", "width": "60%", "overflow": "hidden", "overflowY": "scroll"}} >
          {
            this.state.ingredients.map(ingredient => {
              return (
                
                <li key={ingredient._id} className="ph3 pv2 bb b--light-silver">
                  {ingredient.name}, {ingredient.brand} <button>+</button>
                  {/* <Icons icon="AddButton-database"/> */}
                </li>
              )
            })
          }
          </ul>
        </div>
          
        <Link className="link blue hover-silver dib mh3 tc" style={{
            "display": "flex", "flexDirection":"row", "justifyContent": "center", "alignItems":"center"}}>
          <Icons icon="FoodsDetails"/>
          <span class="f6 db" style={{"marginLeft": "10px"}}>0 ingredients added</span>
          </Link>

        <Link className="link blue hover-silver dib mh3 tc" style={{
            "display": "flex", "flexDirection":"row", "justifyContent": "center", "alignItems":"center"}}>
          <Icons icon="AddButton"/>
          <span class="f6 db" style={{"marginLeft": "10px"}}>Didn't find your ingredient? </span>
        </Link>
        
        <h3>Ingredient:</h3>
        <AddIngredient user={this.state.user}/>
        <BottomNavBar />
      </div>
    )
  }
}
