import React, { Component } from 'react'

import TopBar from '../shared/TopBar'
import BottomNavbar from '../shared/BottomNavbar'

export default class More extends Component {
  render() {
    return (
      <div>
        <TopBar icon='more' title='More'/>
        <BottomNavbar/>
      </div>
    )
  }
}
