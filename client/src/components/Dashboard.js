import React, { Component } from 'react'
import Calendar from './Calendar.js'
import axios from 'axios';
import BottomNavBar from './BottomNavBar'


export default class Dashboard extends Component {

  state = {
    day: new Date().toISOString().split('T')[0],
    data: null,
    entries: [],
    user: this.props.user._id
  }

  setDate = (date) => {
      this.setState({
        day: date
      })
        this.getData()   
  }
  getData = () => {

    axios.get(`/api/days/user/${this.props.user._id}/day/${this.state.day}`)
    .then(res => {
      console.log(this.state.data)
      this.setState({
        data: res.data,
      })
    })
    .catch(err => console.log(err))
  }


  componentDidMount = () => {
    // this.setState({
    //   user: this.props.user._id
    // })
    
    this.getData()
  }
  // information from api -> for logged in user get all data with date today

  render() {
    console.log(this.state.data)
    return (
      <div>
          <Calendar setDate={this.setDate}/>
        <div>
          {!this.state.data ? (<p>No entries today</p>) : (<p>yes</p>)}
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
        <BottomNavBar />
      </div>
    )
  }
}

        /* if there is data show an overview of today */
        /* no data? -suggest that the user adds data */