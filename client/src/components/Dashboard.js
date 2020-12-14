import React, { Component } from 'react'
import Calendar from './Calendar.js'
import axios from 'axios';


export default class Dashboard extends Component {

  state = {
    day: new Date(),
    entries: []
  }
  // information from apu -> for logged in user get all data with date today
  // on click for the left and right buttons get the data from that day
  // fo the calendar selector
  /* From Calendar get the paramters of the date in order to update the data*/
  render() {
    return (
      <div>
          <Calendar />
        <div>
          <h1 className="fw4 blue mt0 mb0">Daily entries</h1>
          <section className="ph4 ph4-ns pv3">
          <article className="mw6 center br3 ba b--light-blue bg-white">
            <div className="dt-ns dt--fixed-ns w-100">
              <div className="pa3 pa3-ns dtc-ns v-mid">
                  <h2 className="fw4 blue mt0 mb0">You've eaten Broccoli</h2>
              </div>
              <div className="pa3 pa4-ns dtc-ns v-mid">
                <a href="#" className="center no-underline f6 tc db w-40 pv3 bg-animate bg-blue hover-bg-dark-blue white br2">Edit entry</a>
              </div>
            </div>
          </article>
          <br></br>
          <article className="mw6 center br3 ba b--light-blue bg-white">
            <div className="dt-ns dt--fixed-ns w-100">
              <div className="pa3 pa4-ns dtc-ns v-mid">
                  <h2 className="fw4 blue mt0 mb0">You've had a Headache</h2>
              </div>
              <div className="pa3 pa4-ns dtc-ns v-mid">
                <a href="#" className="no-underline center f6 tc db w-40 pv3 bg-animate bg-blue hover-bg-dark-blue white br2">Edit entry</a>
              </div>
            </div>
          </article>         
        </section>
        </div>
        <div> At the bottom I would call the footer</div>
      </div>
    )
  }
}

        /* if there is data show an overview of today */
        /* no data? -suggest that the user adds data */