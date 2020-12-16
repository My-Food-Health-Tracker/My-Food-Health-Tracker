import React, { Component } from 'react'

import TopBar from '../shared/TopBar'
import BottomNavBar from '../shared/BottomNavbar'

export default class More extends Component {
  render() {
    return (
      <div>
        <TopBar icon='more' title='More'/>
        <BottomNavBar/>
      </div>
    )
  }
}
