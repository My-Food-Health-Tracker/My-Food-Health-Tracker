import './App.css';
import React from 'react';
import {Route, Redirect} from 'react-router-dom';

//final views component
import Home from './components/Home';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import InitialDiary from './components/InitialDiary'
import FoodEntry from './components/view5-food-entry/FoodEntry';

class App extends React.Component {

  state = {
    user: this.props.user
  }

  setUser = user => {
    this.setState({
      user: user
    })
  }

  render() {

    console.log(this.state.user)
    return (
      <div className="App">
       
      <Route exact path='/'
       render = {props => <Home setUser={this.setUser} {...props}/>}
       />

      <Route 
      exact 
      path='/signup' 
      render = {props => <Signup setUser={this.setUser} {...props} />}
      />
      <Route 
      exact 
      path='/login' 
      render = {props => <Login setUser={this.setUser} {...props}/>}
      /> 

      <Route 
      exact 
      path='/initial-diary' 
      render={props => {
        if (this.state.user) return <InitialDiary setUser={this.setUser} {...props}/>
        else { return <Redirect to='/'/> }
        }}
      />

      <Route exact path='/food-entry'
       render = {props => <FoodEntry setUser={this.setUser} {...props}/>}
       />
      </div>
)
  }
  }

export default App;
