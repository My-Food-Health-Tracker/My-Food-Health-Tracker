import React, { Component } from 'react'
import AddExercise from '../add-entries/AddExercise'
import AddSymptoms from '../add-entries/AddSymptoms'
import AddSleep from '../add-entries/AddSleep'
import AddEnergy from '../add-entries/AddEnergy'


export default class EditEntryTest extends Component {
  render() {
    return (
      <div>
        {/* <AddExercise startDate="2020-12-01" 
                     startTime= "10:52"
                     name="Baseball"
                     intensityLevel= {8}
                     duration={1}
                     id='5fd9d902242e628864d1ca6e'
                     editing={true}
                     user={this.props.user}
                     /> */}
        {/* <AddSymptoms startDate="2020-12-01" 
                     startTime= "15:29"
                     name="Headache"
                     intensity= {2}
                     notes=""
                     id='5fd9fdc2dca2149591b0359e'
                     editing={true}
                     user={this.props.user}
                     /> */}
        {/* <AddSleep    startDate="2020-12-01" 
                     startTime= "22:51"
                     duration= {9}
                     notes=""
                     id='5fda032016971097fbdab3c7'
                     editing={true}
                     user={this.props.user}
                     /> */}

        <AddEnergy   startDate="2020-12-01" 
                     startTime= "15:54"
                     energyLevel= {1}
                     editing={true}
                     user={this.props.user}
                     />
      </div>
    )
  }
}
