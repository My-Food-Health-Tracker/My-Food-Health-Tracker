import React, { Component } from 'react'
import TopBar from './TopBar'
import BottomNavBar from './BottomNavBar'
import TimeInput from './TimeInput'
import IntensityBar from './IntensityBar'
import axios from 'axios'

export default class AddEnergy extends Component {

  state={
    startDate: undefined,//this should be the present day in the string format: "yyyy-mm-dd"
    startTime: undefined,//this should bte the present time in the string format:"hh:mm"
    energyLevel:undefined
  }

  handleChange=event=>{
    const name=event.target.name;
    const value=event.target.value;

    this.setState({
    [name]:value
    })
  }

  handleSubmit=event=>{
    event.preventDefault();
    //check if the day exist already (to do that I use the user id that is in the props)
    const energyEntry=this.state;
    axios.post(`/api/days/user/${this.props.user._id}/day/${this.state.startDate}/energy`,energyEntry)
      .then(res=>console.log(res)
      )
      .catch(err=>console.log(err))
   }

  handleDelete=()=>{
    axios.delete(`/api/days/user/${this.props.user._id}/day/${this.state.startDate}/energy`)
      .then(res=>console.log(res))
      .catch(err=>console.log(err))
  }



  render() {

  console.log(this.state.startDate)
    return (
      <div className='flex flex-column'>
        <TopBar title='Energy' icon='Energy'/>
        <form onSubmit={this.handleSubmit} className='flex flex-column items-center' action="">
          <label htmlFor="start-date">Start:</label>
          <input onChange={this.handleChange} type="date" id="start-date" name="startDate" />
          <input onChange={this.handleChange} type="time" id="start-date" name="startTime" />
          <label htmlFor="energyLevel">Energy Level:</label>
          <input onChange={this.handleChange} value={this.state.energyLevel} type="range" name="energyLevel" min="1" max="10"/>
          <button type="submit" className="f6 w4 dim ph3 pv2 mb2 dib white bg-dark-blue br-pill b--dark-blue">Save</button>
        </form>
          <button onClick={()=>this.handleDelete()} className="f6 w4 dim ph3 pv2 mb2 dib white bg-dark-red br-pill b--dark-red">Delete</button>
        <BottomNavBar/>
      </div>
    )
  }
}
