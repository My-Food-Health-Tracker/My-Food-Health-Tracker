import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <Link to="/signup" style={{'color': 'white'}}>Signup</Link>
        <Link to="/login" style={{'color': 'white'}}>Login</Link>
      <ul>
        <li><Link href="/" style={{'color': 'white'}}>Back to main </Link></li>
        <li><Link to="/usertest" style={{'color': 'white'}}>All users</Link></li>
        <li><Link to="/historicaltest" style={{'color': 'white'}}>Historical data</Link></li>
      </ul>
      </nav>
    )
  }
}
