import React, { Component } from 'react'
import TopBar from '../shared/TopBar'
import BottomNavBar from '../shared/BottomNavBar'
import axios from 'axios'

export default class AddEnergy extends Component {

  state={
    startDate: this.props.startDate,//this should be the present day in the string format: "yyyy-mm-dd"
    startTime: this.props.startTime,//this should bte the present time in the string format:"hh:mm"
    energyLevel:this.props.energyLevel
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
    
    const energyEntry=this.state;

    axios.post(`/api/energy/user/${this.props.user._id}/day/${this.state.startDate}`,energyEntry)
      .then(res=>console.log('the energy was added to the day',res))
      .catch(err=>console.log('the energy was not added to the day',err))

  }

  handleDelete=()=>{

    axios.delete(`/api/energy/user/${this.props.user._id}/day/${this.state.startDate}`)
      .then(res=>console.log('the energy was deleted from the day',res))
      .catch(err=>console.log('the energy was not deleted from the day',err))
  }

  render() {
    return (
      <div className='flex flex-column'>
        <TopBar title='Energy' icon='Energy'/>
        <div className='flex flex-column items-center'>
          <form onSubmit={this.handleSubmit} className='flex flex-column items-center' action="POST">
            <label htmlFor="start-date" className="f6 mt3">Date:</label>
            <input onChange={this.handleChange} type="date" id="start-date" name="startDate" className="mb2"/>
            <label htmlFor="start-time" className="f6 mt3">Time:</label>
            <input onChange={this.handleChange} type="time" id="start-date" name="startTime" className="mb2"/>
            <label htmlFor="energyLevel" className=" f6 mt3">Energy Level:</label>
            <input onChange={this.handleChange} value={this.state.energyLevel} type="range" name="energyLevel" min="1" max="10" className="mt1 mb3"/>
            <button type="submit" className="f6 w4 dim ph3 pv2 mt3 dib white bg-dark-blue br-pill b--dark-blue">Save</button>
          </form>
            <button onClick={()=>this.handleDelete()} className="f6 w4 dim ph3 pv2 mt3 dib white bg-dark-red br-pill b--dark-red">Delete</button>
          <BottomNavBar/>
        </div>
      </div>
    )
  }
}
