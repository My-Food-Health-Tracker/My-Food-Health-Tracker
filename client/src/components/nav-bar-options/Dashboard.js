import React, { Component } from 'react'
import Calendar from '../shared/Calendar'
import axios from 'axios';
import BottomNavbar from '../shared/BottomNavbar'
import Energy from '../Entries/Energy';
import Foods from '../Entries/Foods';
import Drinks from '../Entries/Drinks.js';
import Excercise from '../Entries/Excercise.js';
import Sleep from '../Entries/Sleep.js';
import Symptoms from '../Entries/Symptoms.js';

export default class Dashboard extends Component {

  state = {
    day: new Date().toISOString().split('T')[0],
    user: this.props.user._id,
    data: null,
    energy: 0,
    foods: [],
    drinks: [],
    excercise: [],
    sleep: [],
    symptoms: []
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
          foods: [],
          drinks: [],
          excercise: [],
          sleep: [],
          symptoms: []
        })
      } else {
        this.setState({
          data: res.data,
          energy: res.data.energy ,
          foods: res.data.foods || [],
          drinks: res.data.drinks || [],
          excercise: res.data.excercise || [],
          sleep: res.data.sleep || [],
          symptoms: res.data.symptoms || []
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
            {!this.state.energy ? (<p>No energy entries today</p>) : (<Energy energy={this.state.energy.energyLevel} user={this.state.user}/>)}
            {this.state.symptoms.length === 0 ? (<p>No symptoms entries today</p>) : (<Symptoms symptoms={this.state.symptoms} user={this.state.user}/>)}
            {this.state.foods.length === 0 ? (<p>No food entries today</p>) : (<Foods foods={this.state.foods} user={this.state.user}/>)}
            {this.state.drinks.length === 0 ? (<p>Nodrinks entries today</p>) : (<Drinks foods={this.state.drinks} user={this.state.user}/>)}
            {this.state.excercise.length === 0 ? (<p>No excercise entries today</p>) : (<Excercise excercise={this.state.excercise} user={this.state.user}/>)}
            {this.state.sleep.length === 0 ? (<p>No sleep entries today</p>) : (<Sleep sleep={this.state.sleep} user={this.state.user}/>)}
            </div>)}
          </section>
        </div>
        <BottomNavbar />
      </div>
    )
  }
}
