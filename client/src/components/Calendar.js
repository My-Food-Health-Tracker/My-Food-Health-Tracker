import React, { Component } from 'react'

export default class Calendar extends Component {

  state = {
    day: new Date ()
  }
  handleChange = (event) => {

    console.log(event.target.value)
    this.setState({
      day: event.target.value
    })
  }

  handleLeftClick = (event) => {
  console.log(this.state.day)
  let d = this.state.day
  console.log(d)
  d.setDate(d.getDate() - 1 )
  this.setState({
    day: d
  })
  }
  handleRightClick = (event) => {
    console.log(this.state.day)
    let d = this.state.day
    console.log(d)
    d.setDate(d.getDate() + 1 )
    console.log(d.getDate())
    this.setState({
      day: d
    })
    }
  render() {
    return (
      <div>
          <nav className="pa3 pa4-ns center">
          <div className="tc pb3">
          <a className="link dim gray f6 f5-ns dib mr3" onClick={this.handleLeftClick}> {"<"} </a>
          <form className="link dim gray f6 f5-ns dib mr3">
            <input type="date" name="date" id="date" value={this.state.day.toISOString().split('T')[0]} placeholder={this.state.day} onChange={this.handleChange}/>
          </form>
          <a className="link dim gray f6 f5-ns dib mr3" onClick={this.handleRightClick}> {">"} </a>
          </div>
        </nav>
      </div>
    )
  }
}
