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
<<<<<<< HEAD
        <Link className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-dark-pink" to="/signup">Signup</Link>
        <Link className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-dark-pink" to="/login">Signup</Link>
=======
        <Link className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-lightest-blue" to="/signup">Signup</Link>
        <Link className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-dark-pink" to="/login">Login</Link>

         
>>>>>>> 0c6f215047e8150d6084180ccd04457295386ccc
      </div>
      
    </div>
  )
}

