import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Excercise extends Component {
  state = {
    exercises: this.props.exercises || []
  }

  componentDidMount (){
    this.setState({
      exercises: this.props.exercises
    })
  }


  render() {
    console.log(this.props)
    return (
      <article className="mw6 center br3 ba b--light-blue bg-white mb2" style={{height: 'auto'}}>
        {this.props.exercises.map(exercise => (
          <div key={exercise._id}className="dt-ns dt--fixed-ns w-100">
          <div className="pa1 pa3-ns dtc-ns v-mid">
                  <h2 className="fw4 blue mt0 mb0">You've done:</h2> 
                  <ul>
                  {exercise.name} with intensity {exercise.intensityLevel}
                  </ul>
                  <span className="pa3 pa4-ns dtc-ns v-mid">
                <Link to={{pathname: '/add/Exercise', state:{ exercises: exercise, editing: true, day:this.props.day}}} className="center no-underline f6 tc db w-20 pv3 bg-animate bg-blue hover-bg-dark-blue white br2" >Edit</Link>
              </span>
              </div>
          </div>
        ))}
      </article>
    )
  }
}
