
import React, { Component } from 'react'

export default class Drinks extends Component {
  render() {
    return (
      <article className="mw6 center br3 ba b--light-blue bg-white mb2" style={{height: 'auto'}}>
        {this.props.drinks.map(drink => (
          <div className="dt-ns dt--fixed-ns w-100">
          <div className="pa1 pa3-ns dtc-ns v-mid">
                  <h2 className="fw4 blue mt0 mb0">You registered {drink.name}</h2>
                  <span className="pa3 pa4-ns dtc-ns v-mid">
                <a href="#" className="center no-underline f6 tc db w-20 pv3 bg-animate bg-blue hover-bg-dark-blue white br2">Edit</a>
              </span>
              </div>
          </div>
        ))}
      </article>
    )
  }
}
