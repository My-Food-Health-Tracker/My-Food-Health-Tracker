import React, { Component } from 'react'
import axios from 'axios';

export default class TestView extends Component {

  state = {
    users: [],
    error: null
  }

  getData = () => {
    const id = this.props.match.params.id;
    // get the project that was clicked from the server
    axios.get(`/`)
      .then(response => {
        console.log(response);
        // this.setState({
        //   project: response.data,
        //   title: response.data.title,
        //   description: response.data.description
        // })
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
    if (this.state.error) return <h1>Error{this.state.error}</h1>
    if (!this.state.users) return <h1>Loading...</h1>
    return (
      <div>
      Table of current users and information
      {this.state.users.map((user) => 
        <div>There is this user</div>
      )}
      Form for creating a user (should this be in a separete view?)
      </div>
    )
  }
}
