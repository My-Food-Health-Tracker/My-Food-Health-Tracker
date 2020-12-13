import React, { Component } from 'react'

export default class AddFood extends Component {

  state = {
      startTime: '' 
  }

  render() {
    return (
      <div>
        <form>
          <label for="time">Time:</label>

          <input type="datetime-local" id="time"
                name="time" value={Date.now()}
                min="2010-01-01T00:00" max="2030-01-01T00:00"
          />
        </form>
      </div>
    )
  }
}
