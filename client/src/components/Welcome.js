import React, { Component } from 'react'
import logo from '../logo.svg';

export default class Welcome extends Component {
  render() {
    return (
      <div>
         <img src={logo} className="App-logo" alt="logo" />
          <div>Welcome to the first view of our page :) </div>
          (this message comes from the Welcome components of react)
      </div>
    )
  }
}
