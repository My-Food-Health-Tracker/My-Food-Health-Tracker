import React from 'react'
import { logout } from '../services/auth';
import { Link } from 'react-router-dom';

const handleLogout = props => {
  console.log(props);
  logout().then(() => {
    props.setUser(null);
  })
}

export default function InitialDiary(props) {
  
  return (
    <div>
      <h1>Initial Diary Page</h1>
      <Link to='/' onClick={() => handleLogout(props)}>Logout</Link>
      <Link to='/food-entry'>Add a Food</Link>
    </div>
  )
}

