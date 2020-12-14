import React, { Component } from 'react'
import TopBar from '../shared/TopBar'
import BottomNavBar from '../shared/BottomNavBar'
import axios from 'axios'

export default class AddExercise extends Component {
  state={
    startDate: this.props.startDate,//this should be the present day in the string format: "yyyy-mm-dd"
    startTime: this.props.startTime,//this should bte the present time in the string format:"hh:mm"
    description:this.props.description,
    intensityLevel:this.props.intensityLevel,
    duration:this.props.duration,
    saveToFrequent:false
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
    
    const exerciseEntry=this.state;

    axios.post(`/api/energy/user/${this.props.user._id}/day/${this.state.startDate}`,exerciseEntry)
      .then(res=>console.log('the exercise was added to the day',res))
      .catch(err=>console.log('the exercise was not added to the day',err))

    if(this.state.saveToFrequent){
      //add logic to save to frequent entries
    }

  }

  handleDelete=()=>{

    axios.delete(`/api/energy/user/${this.props.user._id}/day/${this.state.startDate}`)
      .then(res=>console.log('the energy was deleted from the day',res))
      .catch(err=>console.log('the energy was not deleted from the day',err))
  }

  render() {

    const descriptionOptions=['Choose an option','Aerobics','Baseball','Boxing','Climbing','Cycling','Dancing','Diving','Football',
                                'Golf','Hiking','Hockey','Martial Arts','Rowing','Rugby','Running','Skiing','Softball',
                                'Swimming', 'Tennis','Volleyball','Walking','Weights','Yoga','Other'];

    return (
      <div className='flex flex-column'>

        <TopBar title='Exercise' icon='Exercise'/>

        <div className='flex flex-column items-center'>
          <form onSubmit={this.handleSubmit} className='flex flex-column items-center' action="POST">

            <label htmlFor="start-date" className="f6 mt3">Date:</label>
            <input onChange={this.handleChange} type="date" id="start-date" name="startDate" className="mb2"/>

            <label htmlFor="start-time" className="f6 mt3">Time:</label>
            <input onChange={this.handleChange} type="time" id="start-date" name="startTime" className="mb2"/>

            <label htmlFor="start-time" className="f6 mt3">Description:</label>
            <select name="description" id="description" className="f6 mt1" >
            {descriptionOptions.map(option=>{
              return(
                <option value={option} className="f6">{option}</option>
              )
            })}
            </select>

            <label htmlFor="intensityLevel" className=" f6 mt3">Intensity:</label>
            <input onChange={this.handleChange} value={this.state.intensityLevel} type="range" name="intensityLevel" min="1" max="10" className="mt1 mb3"/>

            <div className="f6 mt2">
              <label htmlFor="duration" className="f6 mt3">Duration: </label>
              <input onChange={this.handleChange} value={this.state.duration} type="number" id="duration" name="duration" className="mb2"/><span> hrs</span>
            </div>

            <div className="f6 mt2">
              <input onChange={this.handleChange} type="checkbox" id="saveToFrequent" name="saveToFrequent" className="mb2"/>
              <label htmlFor="saveToFrequent" className="f6 mt3"> Save to frequent entries</label>
            </div>

            <button type="submit" className="f6 w4 dim ph3 pv2 mt3 dib white bg-dark-blue br-pill b--dark-blue">Save</button>

          </form>

            <button onClick={()=>this.handleDelete()} className="f6 w4 dim ph3 pv2 mt3 dib white bg-dark-red br-pill b--dark-red">Delete</button>

          <BottomNavBar/>

        </div>
      </div>
    )
  }
}
