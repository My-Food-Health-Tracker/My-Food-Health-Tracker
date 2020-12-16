import axios from 'axios';
import React, { Component } from 'react';
import BottomNavbar from '../shared/BottomNavbar';
import Icons from '../shared/Icons';
import { Link } from 'react-router-dom';
import TopBar from '../shared/TopBar';
import AddRep from './AddRep';
import AddIgt from './AddIgt';
import SearchField from './SearchField';
import IngredientList from './IngredientList';
import IngreList from './IngreList';

export default class FoodEntry extends Component {
  state = {
    // this is the loggedin user from App.js
    user: this.props.user,
    days: [],
    ingredients: [],
    date: '',
    startTime: '',
    name: '',
    brand: '',
    category: '', servingAmount: '', servingSize: '', portion: '', eatenPortion: '',
    selectedIngredient: false,
    handleShowSingle: true,
    ingredientCount: 0,
    query: '',
  }

  // Get initial ingredients data
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

  // Functions for search bar
  setQuery = query => {
    this.setState({
      query: query
    })
  }
  handleSearch = event => {
    const filteredIngredients = this.state.ingredients.filter(ingredient => 
      ingredient.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    this.setState({
      query: event.target.value,
      ingredients: filteredIngredients
    })
  }

  // Function for fill out the ingredient form
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

// Functions for toggle Recipe
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

  // Functions for submit form
  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  }

  handleSingleSubmit = event => {
    event.preventDefault();
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
    const payload = this.state;
    console.log(payload);
    console.log(this.state.date)
    axios.post(`/api/ingredients/recipe/user/${this.props.user._id}/day/${this.state.date}`, payload)
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

// Function for get an array of object and then send it back to server


  // handleAddButton = (object) => {
  //   this.setState({
  //     ingredientsOfDay: this.state.ingredientsOfDay.push(object)
  //   })
  // }

  
  render() {
    // console.log(this.state.ingredientsOfDay);
    // if (!this.state.days) return <h1>Loading...</h1>
    // console.log('this is the user in foodentry', this.state.user)
    let inputComponent;
    if (this.state.handleShowSingle) {     
      inputComponent = <AddIgt {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSingleSubmit} />;    
      } 
    else {      
      inputComponent = <AddRep {...this.state} handleChange={this.handleChange} handleSubmit={this.handleRecipeSubmit} handleAddButton={this.handleAddButton}/>;  
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
      <SearchField {...this.state} query={this.state.query} setQuery={this.setQuery} />
      {/* show the ingredients in database */}
      <IngredientList {...this.state} query={this.state.query} setQuery={this.setQuery} handleClick={this.handleClick}/>

      {/* Show a SingleIngredient or Recipe */}
        <div>{inputComponent}</div>
        
      {/* Show the added ingredients */}
        <Link to='/ingredients-of-day' className="link blue hover-silver dib mh3 tc" style={{
          "display": "flex", "flexDirection":"row", "justifyContent": "center", "alignItems":"center"}}>
        <Icons icon="FoodsDetails"/>
        <span className="f6 db" style={{"marginLeft": "10px"}}>{this.state.ingredientCount} ingredients added</span>
        </Link>
        <IngreList {...this.state} />
      {/* Bottom navbar */}
        <BottomNavbar {...this.state} />
      </div>
    )
  }
}
