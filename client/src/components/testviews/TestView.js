import React, { Component } from 'react'
import axios from 'axios';

export default class TestView extends Component {

  state = {
    days: [],
    error: null
  }

  getData = () => {
    // const id = this.props.match.params.id;
    // get the project that was clicked from the server
    axios.get(`/api/days`)
      .then(response => {
        console.log(response.data);
        this.setState({
          days: response.data
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
    if (!this.state.days) return <h1>Loading...</h1>
    return (
      <div>
      <table>
        <thead>
        <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Entries (Daily)</th>
        </tr>
        </thead>
        <tbody>
        {/* {this.state.days.map((entry) => 
        <tr key={entry._id}> 
        <td></td>
        Hi
        <td> </td>
        <td> </td>
        </tr>
      )} */}
        </tbody>
      </table>
      </div>
    )
  }
}
