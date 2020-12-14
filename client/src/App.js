import './App.css';
import React from 'react';
import {Route, Redirect} from 'react-router-dom';

<<<<<<< HEAD
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
=======

//final views component
import Home from './components/Home';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
>>>>>>> master
import InitialDiary from './components/InitialDiary'

//Hortencia:components for the BottomNavBar
import Analysis from './components/Analysis'
import AddFrequent from './components/AddFrequent'
import More from './components/More'
import AddItem from './components/AddItem'

//Hortencia:Components for the view nº11
import AddEnergy from './components/AddEnergy'
import AddDays from './components/testviews/AddDays'



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
<<<<<<< HEAD
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
=======
       

>>>>>>> master

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

      {/* Routes in BottomNavBar  */}
      <Route 
      exact 
      path='/initial-diary' 
      render={props => {
        if (this.state.user) return <InitialDiary {...props}/>
        else { return <Redirect to='/'/> }
        }}
      />
      <Route exact path='/add-item' component={AddItem}/>
      <Route exact path='/analysis' component={Analysis}/>
      <Route exact path='/add-frequent' component={AddFrequent}/>
      <Route exact path='/more' component={More}/>

      {/* Routes to add entries */}
      <Route 
      exact 
      path='/add/Energy' 
      render={() => <AddEnergy user={this.state.user}/>}
      />

<Route 
      exact 
      path='/add-a-day' 
      render={() => <AddDays user={this.state.user}/>}
      />
      </div>
)
  }
  }

export default App;
