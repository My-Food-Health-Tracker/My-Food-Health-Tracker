import React, { Component } from 'react'

import TopBar from '../shared/TopBar'
import BottomNavBar from '../shared/BottomNavBar'

export default class Analysis extends Component {
  render() {
    return (
      <div>
      <TopBar icon='analysis' title='Analysis'/>
      
      <BottomNavBar/>
      </div>
    )
  }
}
