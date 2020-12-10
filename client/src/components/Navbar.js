import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <Link to="/test" style={{'color': 'white'}}>Test view</Link>
      </nav>
    )
  }
}
