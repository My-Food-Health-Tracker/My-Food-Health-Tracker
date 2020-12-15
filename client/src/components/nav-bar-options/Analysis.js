import React, { Component } from 'react'

import TopBar from '../shared/TopBar'
import BottomNavbar from '../shared/BottomNavbar'

export default class Analysis extends Component {
  render() {
    return (
      <div>
      <TopBar icon='analysis' title='Analysis'/>
      <BottomNavbar/>
      </div>
    )
  }
}
