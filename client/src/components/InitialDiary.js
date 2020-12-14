import React, { Component } from 'react'
import {logout} from '../services/auth'
import {Link} from 'react-router-dom'
import AddDays from './testviews/AddDays'



export default class InitialDiary extends Component {

  handleLogOut=()=>{
    logout().then(()=>{
      this.props.user(null)
    })
  }

  render() {
    return (
      <div>
        diary view
        <Link to="/" onClick={this.handleLogOut}>LogOut</Link>
        <Link to="/add-a-day" component={AddDays} ></Link>
      </div>
    )
  }
}
