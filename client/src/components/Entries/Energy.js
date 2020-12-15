import React, { Component } from 'react'

export default class Energy extends Component {
  render() {
    console.log(this.props)
    return (
        <article className="mw6 center br3 ba b--light-blue bg-white">
            <div className="dt-ns dt--fixed-ns w-100">
              <div className="pa3 pa3-ns dtc-ns v-mid">
                  <h2 className="fw4 blue mt0 mb0">Your energy level is {this.props.energy}</h2>
              </div>
              <div className="pa3 pa4-ns dtc-ns v-mid">
                <a href="#" className="center no-underline f6 tc db w-40 pv3 bg-animate bg-blue hover-bg-dark-blue white br2">Edit entry</a>
              </div>
            </div>
          </article>    
    )
  }
}
