import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <nav>
      <ul>
        <li><a href="/" style={{'color': 'white'}}>Back to main</a></li>
        <li><Link to="/usertest" style={{'color': 'white'}}>All users</Link></li>
        <li><Link to="/historicaltest" style={{'color': 'white'}}>Historical data</Link></li>
      </ul>
      </nav>
    )
  }
}
