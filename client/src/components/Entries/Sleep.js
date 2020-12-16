import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Sleep extends Component {
  state = {
    sleep: this.props.sleep || []
  }

  componentDidMount (){
    this.setState({
      sleep: this.props.sleep
    })
  }
  render() {
    return (
      <article className="mw6 center br3 ba b--light-blue bg-white mb2" style={{height: 'auto'}}>
        {this.props.sleep.map(sleep => (
          <div className="dt-ns dt--fixed-ns w-100">
          <div className="pa1 pa3-ns dtc-ns v-mid">
                  <h2 className="fw4 blue mt0 mb0">You slept for {sleep.duration} hours</h2>
                  <span className="pa3 pa4-ns dtc-ns v-mid">
                <Link to={{pathname: '/add/Sleep', state:{ sleep: sleep, editing: true, day:this.props.day}}} className="center no-underline f6 tc db w-20 pv1 bg-animate bg-blue hover-bg-dark-blue white br2" >Edit</Link>
              </span>
              </div>
          </div>
        ))}
      </article>
    )
  }
}
