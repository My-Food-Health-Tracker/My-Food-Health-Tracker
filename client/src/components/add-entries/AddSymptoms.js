import React, { Component } from 'react'
import axios from 'axios'

import TopBar from '../shared/TopBar'
import BottomNavbar from '../shared/BottomNavbar'

export default class AddSymptoms extends Component {
  state={
    startDate: this.props.startDate,//this should be the present day in the string format: "yyyy-mm-dd"
    startTime: this.props.startTime,//this should bte the present time in the string format:"hh:mm"
    name:this.props.name,
    intensity:this.props.intensity,
    notes:this.props.notes,
    id:this.props.id,
    editing:this.props.editing
  }

  handleChange=event=>{

    const {name,value}=event.target;

    this.setState({
    [name]:value
    })

  }

  handleSubmit=event=>{

    event.preventDefault();
    
    const symptomEntry=this.state;

    axios.post(`/api/symptoms/user/${this.props.user._id}/day/${this.state.startDate}`,symptomEntry)
      .then(res=>console.log(res))
      .catch(err=>console.log(err))

  }

  handleDelete=()=>{

    const symptomToDelete=this.state;

    axios.delete(`/api/symptoms/user/${this.props.user._id}/day/${this.state.startDate}`,{data:symptomToDelete})
      .then(res=>console.log(res))
      .catch(err=>console.log(err))
  }

  handleEditing=()=>{
    //
    const updatedSymptom=this.state;

    axios.put(`/api/symptoms/user/${this.props.user._id}/day/${this.state.startDate}`,{data:[this.state.id,updatedSymptom]})
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }

  render() {

    const nameOptions=['Choose an option','Nausea','Vomiting','Diarrhea','Stomach pain',
                        'Headache','Bloating','Eczema','Hayfever','Asthma','Heartburn',
                        'Gas','Constipation','Other'];

    return (
      <div className='flex flex-column'>

        <TopBar title='Symptoms' icon='Symptoms'/>

        <div className='flex flex-column items-center'>
          <form onSubmit={this.state.editing? this.handleEditing : this.handleSubmit} className='flex flex-column items-center' action="POST">

            <label htmlFor="start-date" className="f6 mt3">Date:</label>
            <input onChange={this.handleChange} value={this.state.startDate} type="date" id="start-date" name="startDate" className="mb2"/>

            <label htmlFor="start-time" className="f6 mt3">Time:</label>
            <input onChange={this.handleChange} value={this.state.startTime} type="time" id="start-date" name="startTime" className="mb2"/>

            <label htmlFor="name" className="f6 mt3">Name:</label>
            <select name="name" id="name" onChange={this.handleChange} value={this.state.name} className="f6 mt1" >
            {nameOptions.map(option=>{
              return(
                <option value={option} className="f6">{option}</option>
              )
            })}
            </select>

            <label htmlFor="intensity" className=" f6 mt3">Intensity:</label>
            <input onChange={this.handleChange} value={this.state.intensity} type="range" name="intensity" min="1" max="10" className="mt1 mb3"/>
            
            <label htmlFor="notes" className="f6 mt3">Notes:</label>
            <input onChange={this.handleChange} value={this.state.notes} type="textarea" id="notes" name="notes" className="mb2"/>

            <button type="submit" className="f6 w4 dim ph3 pv2 mt3 dib white bg-dark-blue br-pill b--dark-blue">Save</button>

          </form>

            <button onClick={()=>this.handleDelete()} className="f6 w4 dim ph3 pv2 mt3 dib white bg-dark-red br-pill b--dark-red">Delete</button>

          <BottomNavbar/>

        </div>
      </div>
    )
  }
}
