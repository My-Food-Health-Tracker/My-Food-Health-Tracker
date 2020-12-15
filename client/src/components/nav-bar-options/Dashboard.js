import React, { Component } from 'react'
import Calendar from '../shared/Calendar'
import axios from 'axios';
import BottomNavBar from '../shared/BottomNavBar'
import Energy from '../Entries/Energy';
import Foods from '../Entries/Foods';

export default class Dashboard extends Component {

  state = {
    day: new Date().toISOString().split('T')[0],
    user: this.props.user._id,
    data: null,
    energy: 0,
    foods: []
  }

  setDate = async (date) => {
      await this.setState({
        day: date
      })
      await this.getData()   
  }
  getData = () => {
    console.log('getting data from api')
    axios.get(`/api/days/user/${this.props.user._id}/day/${this.state.day}`)
    .then(res => {
      console.log(res.data)
      if(res.data === null){
        this.setState({
          data: res.data,
          energy: null,
          foods: []
        })
      } else {
        this.setState({
          data: res.data,
          energy: res.data.energy,
          foods: res.data.foods
        })
      }

    })
    .catch(err => console.log(err))
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    console.log('checking for updates', this.props)
    // this.getData()
  }

  componentDidMount = () => {
    // this.setState({
    //   user: this.props.user._id
    // })
    this.getData()
    this.setState()
  }
  // information from api -> for logged in user get all data with date today

  render() {
    // console.log(this.state.data)
    console.log(this.state.energy)
    return (
      <div>
          <Calendar setDate={this.setDate}/>
        <div>
          <h1 className="fw4 blue mt0 mb0">Daily entries</h1>
          <section className="ph4 ph4-ns pv3">
          {!this.state.data ? (<p>No entries today</p>) : (<div>
            {!this.state.energy ? (<p>No energy entries today</p>) : (<Energy energy={this.state.energy.energyLevel}/>)}
            {this.state.foods.length === 0 ? (<p>No food entries today</p>) : (<Foods foods={this.state.foods}/>)}
            </div>)}
          </section>
        </div>
        <BottomNavBar />
      </div>
    )
  }
}

        /* if there is data show an overview of today */
        /* no data? -suggest that the user adds data */