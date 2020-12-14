import React, { Component } from 'react'
import BottomNavBar from '../shared/BottomNavBar'
import EntryList from '../shared/EntryList'

export default class AddItem extends Component {
  render() {
    const eventArr=['Drinks','Foods','Sleep','Exercise']
    const outcomeArr=['Symptoms','Energy']

    return (
      <div className='flex flex-column justify-center items-center'>
        <div className='ba pa3 w-100'>calendarTopBar goes here</div>
        <div className='flex justify-center'>
          <EntryList title="Events" entries={eventArr}/>
          <EntryList title="Outcomes" entries={outcomeArr}/>
        </div>
        <BottomNavBar/>
      </div>
    )
  }
}
