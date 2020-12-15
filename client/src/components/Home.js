import React from 'react'
import {Link} from 'react-router-dom'
import {logout} from '../services/auth'

const handleLogOut=props=>{
  logout().then(()=>{
    props.setUser(null)
  })
}

export default function Home() {
  return (
    <div>
      <div>
        <h1>
          My Health Tracker
        </h1>
        <Link className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-lightest-blue" to="/signup">Signup</Link>
        <Link className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-dark-pink" to="/login">Login</Link>
      </div>
      
    </div>
  )
}

