import './App.css';
import React from 'react';
import {Route, Redirect} from 'react-router-dom';

//test views
// import TestView from './components/testviews/TestView';
// import TestHistorical from './components/testviews/TestHistorical';
// import TestInput from './components/testviews/TestInput';

//final views component
import Navbar from './components/Navbar';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Home from './components/Home';
import Dashboard from './components/nav-bar-options/Dashboard'

// Xiaomei: components for Add Food Entry
import InitialDiary from './components/InitialDiary'
import FoodEntry from './components/add-entries/FoodEntry';
import DrinkEntry from './components/add-entries/DrinkEntry';
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

// import AddDays from './components/testviews/AddDays'



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
       
      <Route exact path='/'
       render = {props => <Home setUser={this.setUser} {...props}/>}
       />

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

        {/* Test routes for add days */}
        {/* <Route
          exact path='/adddays'
          render={props => <AddDays setUser={this.setUser} {...props} />}
        />
        <Route 
          exact 
          path='/add-a-day' 
          render={() => <AddDays user={this.state.user}/>}
          /> */}

        {/* Routes for Dashboard */}
          <Route
          exact path='/dashboard'
          render={props => {
            if (this.state.user) 
              return <Dashboard setUser={this.setUser} user={this.state.user}{...props} />
            else
              return <Redirect to='/'/>
            }
          }
        />

      {/* Routes for Signup and Login */}
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

      {/* Xiaomei: Routes for Food Entry */}
      <Route 
      exact 
      path='/initial-diary' 
      render={props => {
        if (this.state.user) return <InitialDiary setUser={this.setUser} {...props}/>
        else { return <Redirect to='/'/> }
        }}
      />


      {/* Routes in BottomNavBar  */}
      <Route exact path='/add-item' component={AddItem}/>
      <Route exact path='/analysis' render={(props) => <Analysis user={this.state.user} {...props}/>}/>
      <Route exact path='/add-frequent' component={AddFrequent}/>
      <Route exact path='/more' component={More}/>

      {/* Routes to add entries */}
      <Route exact path='/add/Energy' 
      render={() => <AddEnergy user={this.state.user}/>}
      />
      <Route exact path='/add/Exercise' 
      render={(props) => <AddExercise user={this.state.user} {...props}/>}
      />
      <Route exact path='/add/Sleep' 
      render={(props) => <AddSleep user={this.state.user} {...props}/>}
      />
      <Route exact path='/add/Symptoms' 
      render={(props) => <AddSymptoms user={this.state.user} {...props}/>}
      />
      <Route exact path='/add/Foods'
       render = {props => <FoodEntry user={this.state.user} {...props}/>}
       />
      <Route exact path='/add/Drinks'
       render = {props => <DrinkEntry user={this.state.user} {...props}/>}
       />
{/* <Route 
      exact 
      path='/add-a-day' 
      render={() => <AddDays user={this.state.user}/>}
      /> */}
      </div>
)
  }
  }

export default App;
