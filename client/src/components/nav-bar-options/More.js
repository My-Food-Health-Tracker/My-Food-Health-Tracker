import React, { Component } from 'react'
import { logout } from '../../services/auth';
import { Link } from 'react-router-dom';
import TopBar from '../shared/TopBar'
import BottomNavbar from '../shared/BottomNavbar'
import Icons from '../shared/Icons';


const handleLogout = props => {
  console.log(props);
  logout().then(() => {
    props.setUser(null);
  })
}

export default function More(props) {
  
  return (
    <div>
      <TopBar icon="more" title="More"/>
      <Link to='/' onClick={() => handleLogout(props)}><Icons icon="logout"/>Logout</Link>
      <BottomNavbar />
    </div>
  )
}
