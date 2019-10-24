import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    }

    console.log(user);

    axios.post('/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: ''
    })
  }

  render() {
    return (
      <div className="new-user">
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group text-center">
            <label className="sr-only">Username: </label>
            <input type="text"
              required
              className="form-control col-8 "
              value={this.state.username}
              onChange={this.onChangeUsername}
              placeholder='username'
            />
          </div>
          <div className="form-group form-btn">
            <input type="submit" value="Create User" className="btn" />
          </div>
        </form>
      </div>
    )
  }
}