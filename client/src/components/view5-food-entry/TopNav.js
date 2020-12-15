import React, { Component } from 'react'
import Icons from '../shared/Icons'

export default class TopNav extends Component {
  render() {
    return (
      <div>
        <nav className='ba blue pv2 w-100 top-2' style={{"marginBottom": "10px"}}>
          <div className="link blue hover-silver dib mh3 tc" style={{
            "display": "flex", "flexDirection":"row", "justifyContent": "center", "alignItems":"center"}}>
          <Icons icon="Foods"/>
          <span class="f6 db">Foods</span>
          </div>
          
        </nav>
      </div>
    )
  }
}
