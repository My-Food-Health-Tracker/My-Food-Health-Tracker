import axios from 'axios';
import React, { Component } from 'react';
import BottomNavbar from '../shared/BottomNavbar';
import Icons from '../shared/Icons';
import { Link } from 'react-router-dom';
import TopBar from '../shared/TopBar';
import AddRep from './AddRep';
import AddIgt from './AddIgt';

export default class FoodEntry extends Component {
  state = {
    // this is the loggedin user from App.js
    user: this.props.user,
    days: [],
    ingredients: [],
    addedIngredientsFromRecipe: [],
    date: '',
    startTime: '',
    name: '',
    brand: '',
    category: '', servingAmout: '', servingSize: '', portion: '', eatenPortion: '',
    selectedIngredient: false,
    handleShowSingle: true,
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

  toggleRecipe = () => {
    this.setState({
      handleShowSingle: false,
    })
  }

  toggleSingle = () => {
    this.setState({
      handleShowSingle: true,
    })
  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleSingleSubmit = event => {
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

  handleRecipeSubmit = event => {
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

  addIngredient2Recipe = () => {
    // this.setState({
    //   addedIngredientsFromRecipe: this.state.addedIngredientsFromRecipe.push({
    //     name: this.state.name,
    //     brand: this.state.brand,
    //     category: this.state.category,
    //     startTime: this.state.startTime,
    //     servingAmount: this.state.servingAmount,
    //     servingSize: this.state.servingSize
    //   })
    // })
    console.log('this is the ingredients after addIngredients2Recipe', this.state.addedIngredientsFromRecipe)
  }

  render() {
    if (!this.state.days) return <h1>Loading...</h1>
    // console.log('this is the user in foodentry', this.state.user)
    let inputComponent;
    if (this.state.handleShowSingle) {     
      inputComponent = <AddIgt {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSingleSubmit} />;    
      } 
    else {      
      inputComponent = <AddRep {...this.state} handleChange={this.handleChange} handleSubmit={this.handleRecipeSubmit} />;  
      } 

    return (
      <div>
      {/* Top Navbar */}
        <TopBar title="Foods" icon="Foods" /> 

      {/* Two buttons for single ingredient and recipe */}
        <button onClick={()=>this.toggleSingle()} className="f6 link dim br-pill ba ph3 pv2 mb2 dib dark-blue" 
        style={{"marginRight": "5px"}}>Single Ingredient</button>
        <button onClick={()=>this.toggleRecipe()} className="f6 link dim br-pill ba ph3 pv2 mb2 dib dark-blue" 
        style={{"marginLeft": "5px"}}>Recipe</button>

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

        {/* show the ingredients in database */}
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

          <div>
            {inputComponent}
          </div>
          <Link className="link blue hover-silver dib mh3 tc" style={{
            "display": "flex", "flexDirection":"row", "justifyContent": "center", "alignItems":"center"}}>
          <Icons icon="FoodsDetails"/>
          <span className="f6 db" style={{"marginLeft": "10px"}}>{this.state.ingredientCount} ingredients added</span>
          </Link>
        {/* Bottom navbar */}
        <BottomNavbar />
      </div>
    )
  }
}
