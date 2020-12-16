import React, { Component } from 'react'

export default class Energy extends Component {
  render() {
    console.log(this.props)
    return (
        <article className="mw6 center br3 ba b--light-blue bg-white mb2" style={{height: 'auto'}}>
            <div className="dt-ns dt--fixed-ns w-100">
              <div className="pa1 pa3-ns dtc-ns v-mid">
                  <h3 className="fw4 blue mt0 mb0">Your energy level is {this.props.energy}</h3>
                  <span className="pa3 pa4-ns dtc-ns v-mid">
                <a href="#" className="center no-underline f5 tc db w-20 pv1 bg-animate bg-blue hover-bg-dark-blue white br2">Edit</a>
              </span>
              </div>
            </div>
          </article>    
    )
  }
}
