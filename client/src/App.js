import './App.css';
import React from 'react';
import {Route, Redirect} from 'react-router-dom';

//test views
import TestView from './components/testviews/TestView';
import TestHistorical from './components/testviews/TestHistorical';
import TestInput from './components/testviews/TestInput';

//final views component
import Navbar from './components/Navbar';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Home from './components/Home';
import Dashboard from './components/nav-bar-options/Dashboard'
import InitialDiary from './components/InitialDiary'

//Hortencia:components for the BottomNavBar Links
import Analysis from './components/nav-bar-options/Analysis'
import AddFrequent from './components/nav-bar-options/AddFrequent'
import More from './components/nav-bar-options/More'
import AddItem from './components/nav-bar-options/AddItem'

//Hortencia:components for adding entries
import AddEnergy from './components/add-entries/AddEnergy'
import AddExercise from './components/add-entries/AddExercise'
import AddSleep from './components/add-entries/AddSleep'
import AddSymptoms from './components/add-entries/AddSymptoms'

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

    // console.log(this.state.user)
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
          render={props => <Dashboard setUser={this.setUser} user={this.state.user}{...props} />}
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
      <Route exact path='/analysis' render={(props) => <Analysis user={this.state.user} {...props}/>}/>
      <Route exact path='/add-frequent' component={AddFrequent}/>
      <Route exact path='/more' component={More}/>

      {/* Routes to add entries */}
      <Route exact path='/add/Energy' 
      render={() => <AddEnergy user={this.state.user}/>}
      />
      <Route exact path='/add/Exercise' 
      render={() => <AddExercise user={this.state.user}/>}
      />
      <Route exact path='/add/Sleep' 
      render={() => <AddSleep user={this.state.user}/>}
      />
      <Route exact path='/add/Symptoms' 
      render={() => <AddSymptoms user={this.state.user}/>}
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
