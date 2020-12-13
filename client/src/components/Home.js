import { PromiseProvider } from 'mongoose'
import React from 'react'
import {Link} from 'react-router-dom'
import {logout} from '../services/auth'

const handleLogout = props => {
  console.log(props);
  logout().then(() => {
    props.setUser(null);
  })
}

export default function Home(props) {
  return (

    <div>
      <h1>My Health Tracker</h1>
      <div>
        <Link className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-dark-pink" to="/signup">Signup</Link>
        <Link className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-dark-pink" to="/login">Login</Link>

      </div>
      
    </div>
  )
}

