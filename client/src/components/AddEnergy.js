import React, { Component } from 'react'
import TopBar from './TopBar'
import BottomNavBar from './BottomNavBar'
import TimeInput from './TimeInput'
import IntensityBar from './IntensityBar'

export default class AddEnergy extends Component {

  state={
    
    startDate: this.props.date,
    startTime: new Date(),
    energyLevel:0

  }



  render() {
    return (
      <div className='flex flex-column'>
        <TopBar title='Energy' icon='Energy'/>
        <form className='flex flex-column items-center' action="">
          <label for="start-date">Start:</label>
          <input type="date" id="start-date" name="startTime" />
          <input type="time" id="start-date" name="startTime" />
          <label for="start-date">Energy Level:</label>
          <input type="range" min="1" max="10"/>
          <button className="f6 w4 dim ph3 pv2 mb2 dib white bg-dark-blue br-pill b--dark-blue">Save</button>
          <button className="f6 w4 dim ph3 pv2 mb2 dib white bg-dark-blue br-pill b--dark-blue">Delete</button>
        </form>
        <BottomNavBar/>
      </div>
    )
  }
}
