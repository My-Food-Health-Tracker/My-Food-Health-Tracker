
import './App.css';
import React from 'react';
import Welcome from './components/Main'
import {Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import TestView from './components/testviews/TestView';
import TestHistorical from './components/testviews/TestHistorical';
import TestInput from './components/testviews/TestInput';

import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Main from './components/Main';
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
    return (
      <div className="App">
       
        <header className="App-header">
         <Navbar user={this.state.user} setUser={this.setUser} />
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
          exact
          path='/signup'
          render={props => <Signup setUser={this.setUser} {...props} />}
        />
        <Route
          exact
          path='/login'
          render={props => <Login setUser={this.setUser} {...props} />}
        />

        <Route
          exact path='/adddays'
          render={props => <AddDays setUser={this.setUser} {...props} />}
        />
        
        <Route
          exact path='/' component={Main}
        />
        </header>
      </div>
    );
  }
  
}

export default App;
