
import './App.css';
import React from 'react';
import Welcome from './components/Welcome'
import {Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import TestView from './components/testviews/TestView';
import TestHistorical from './components/testviews/TestHistorical';

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
          <Navbar />
          <Route
          exact
          path='/usertest'
          render={props => <TestView {...props} /> }
          ></Route>
          <Route
          exact
          path='/historicaltest'
          render={props => <TestHistorical {...props} /> }
          ></Route>
        </header>
      </div>
    );
  }
  
}

export default App;
