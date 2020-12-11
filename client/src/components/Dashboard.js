import React, { Component } from 'react'
import Calendar from './Calendar.js'
import axios from 'axios';


export default class Dashboard extends Component {

  // information from apu -> for logged in user get all data with date today
  // on click for the left and right buttons get the data from that day
  // fo the calendar selector
  /* From Calendar get the paramters of the date in order to update the data*/
  render() {
    return (
      <div>
          <Calendar />
        <div>
          Here will be all the data
          <div>Here would be each entry for that day</div>
        </div>

      </div>
    )
  }
}

        /* if there is data show an overview of today */
        /* no data? -suggest that the user adds data */