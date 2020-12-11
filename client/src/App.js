import './App.css';
import React from 'react';
import {Route, Redirect} from 'react-router-dom';



import Navbar from './components/Navbar';
import TestView from './components/testviews/TestView';
import TestHistorical from './components/testviews/TestHistorical';
import TestInput from './components/testviews/TestInput';

//final views component
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Home from './components/Home';
import AddDays from './components/testviews/AddDays'
import InitialDiary from './components/InitialDiary'

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
      <Route exact path='/' component={Home}/>
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
        if (this.state.user) return <InitialDiary {...props}/>
        else { return <Redirect to='/'/> }
        }}
      />
      </div>
)
  }
  }

export default App;
