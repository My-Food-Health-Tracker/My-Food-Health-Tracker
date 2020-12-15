import React, { Component } from 'react'
import BottomNavBar from '../shared/BottomNavBar'
import EntryList from '../shared/EntryList'
import TopBar from '../shared/TopBar'

export default class AddFrequent extends Component {
  render() {
    const frequentArr=['Drinks','Foods','Exercise']

    return (
      <div className='flex flex-column justify-center items-center'>
        <TopBar className='ba pa3 w-100' title='Frequent Entries' icon='frequent'/>
        <div className='flex justify-center'>
          <EntryList title="" entries={frequentArr}/>
        </div>
        <BottomNavBar/>
      </div>
    )
  }
}
