import React, { Component } from 'react'
import axios from 'axios';

export default class TestView extends Component {

  state = {
    users: [],
    error: null
  }

  getData = () => {
    // const id = this.props.match.params.id;
    // get the project that was clicked from the server
    axios.get(`/api`)
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

  componentDidMount = () => {
    this.getData();
  }

  
  render() {
    let count = 0
    if (this.state.error) return <h1>Error{this.state.error}</h1>
    if (!this.state.users) return <h1>Loading...</h1>
    return (
      <div>
      Table of current users and information
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
