import React, { Component } from 'react'
import axios from 'axios'

import TopBar from '../shared/TopBar'
import BottomNavBar from '../shared/BottomNavBar'

export default class AddSleep extends Component {

  state={
    startDate: this.props.startDate,//this should be the present day in the string format: "yyyy-mm-dd"
    startTime: this.props.startTime,//this should bte the present time in the string format:"hh:mm"
    duration:this.props.duration,
    notes:this.props.notes
  }

  handleChange=event=>{

    const { name, value}= event.target;

    this.setState({
    [name]:value
    })

  }

  handleSubmit=event=>{

    event.preventDefault();
    
    const sleepEntry=this.state;

    axios.post(`/api/sleep/user/${this.props.user._id}/day/${this.state.startDate}`,sleepEntry)
      .then(res=>console.log(res))
      .catch(err=>console.log(err))

  }

  handleDelete=()=>{

    const sleepToDelete=this.state;

    axios.delete(`/api/sleep/user/${this.props.user._id}/day/${this.state.startDate}`,{data:sleepToDelete})
      .then(res=>console.log(res))
      .catch(err=>console.log(err))
  }

  render() {

    return (
      <div className='flex flex-column'>

        <TopBar title='Sleep' icon='Sleep'/>

        <div className='flex flex-column items-center'>
          <form onSubmit={this.handleSubmit} className='flex flex-column items-center' action="POST">

            <label htmlFor="start-date" className="f6 mt3">Date:</label>
            <input onChange={this.handleChange} value={this.state.startDate} type="date" id="start-date" name="startDate" className="mb2"/>

            <label htmlFor="start-time" className="f6 mt3">Time:</label>
            <input onChange={this.handleChange} value={this.state.startTime} type="time" id="start-date" name="startTime" className="mb2"/>

            <div className="f6 mt2">
              <label htmlFor="duration" className="f6 mt3">Duration: </label>
              <input onChange={this.handleChange} value={this.state.duration} type="number" min="0" max="24" id="duration" name="duration" className="mb2 w3"/><span> hrs</span>
            </div>

            <label htmlFor="notes" className="f6 mt3">Notes:</label>
            <input onChange={this.handleChange} value={this.state.notes} type="textarea" id="notes" name="notes" className="mb2"/>

            <button type="submit" className="f6 w4 dim ph3 pv2 mt3 dib white bg-dark-blue br-pill b--dark-blue">Save</button>

          </form>

            <button onClick={()=>this.handleDelete()} className="f6 w4 dim ph3 pv2 mt3 dib white bg-dark-red br-pill b--dark-red">Delete</button>

          <BottomNavBar/>

        </div>
      </div>
    )
  }
}
