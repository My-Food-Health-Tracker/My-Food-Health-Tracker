import React, { Component } from 'react'
import axios from 'axios';

export default class TestHistorical extends Component {
  state = {
    users: []
  }

  getData = () => {
// get all the users 
    axios.get('/api/users')
      .then(response => {
        console.log(response);
        this.setState({
          users: response.data
        })
      })
      .catch(err => {
        console.log(err.response)
        if (err.response.status === 404) {
          this.setState({
            error: 'Sorry - No users found 🤷‍♀️ 🤷‍♂️'
          })
        }
      })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.user)
    axios.get(`/api/${this.state.user}`)
      .then((res) => {
        console.log(res.data)
// this.setState({

// })
      })
      .catch(err => console.log(err))

  }
  

  handleChange = (event) => {
    const id = event.target.value;
    this.setState({
      user: id
    })
  }

  componentDidMount = () => {
    this.getData();
  }

  
  render() {
    let count = 0
    if (this.state.error) return <h1>{this.state.error}</h1>
    if (!this.state.users) return <h1>Loading...</h1>
    return (
      <div>
      {/* User: {this.state.user.username} */}
      <form onSubmit={this.handleSubmit}>
        <select name="user" id="user" onChange={this.handleChange}>
        <option key='0'>Select a user...</option>
        {this.state.users.map(user => 
        <option key={user._id} value={user._id}>{user.username}</option>)}
        </select>
        <button type="submit">See details</button>
      </form>
      <table>
        <thead>
        <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Entries (Daily)</th>
        </tr>
        </thead>
        <tbody>
        {this.state.users.map((user) => 
        <tr key={user._id}> 
        <td> {user.username}</td>
        <td> {user.email}</td>
        <td> {user.days.map(day => <p key={day._id}>1</p>)}</td>
        </tr>
      )}
        </tbody>
      </table>

      Form for creating a user (should this be in a separete view?)
      </div>
    )
  }
}

