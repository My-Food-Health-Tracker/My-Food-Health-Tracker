import './App.css';
import React from 'react';
import {Route, Redirect} from 'react-router-dom';

//test views
import TestView from './components/testviews/TestView';
import TestHistorical from './components/testviews/TestHistorical';
import TestInput from './components/testviews/TestInput';
import AddDays from './components/testviews/AddDays'

//final views component
import Navbar from './components/Navbar';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Home from './components/Home';
import Dashboard from './components/Dashboard'
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
         {/* <Navbar user={this.state.user} setUser={this.setUser} /> */}
          {/* <Route exact path='/usertest' render={props => <TestView {...props} /> }
          ></Route>
          <Route
          exact
          path='/historicaltest'
          render={props => <TestHistorical {...props} /> }
          ></Route>
          <Route
          exact
          path='/testinput'
          render={props => <TestInput {...props} /> }
          ></Route> */}

        <Route
          exact path='/adddays'
          render={props => <AddDays setUser={this.setUser} {...props} />}
        />
          <Route
          exact path='/dashboard'
          render={props => <Dashboard setUser={this.setUser} {...props} />}
        />

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
