import React, {Component} from 'react';
import {UsersService} from "../../services/UsersService";

class UserList extends Component {

  state = {users: []}

  _userService = new UsersService()

  componentDidMount() {
    this._userService.getUsers().then(value => {
      this.setState({users: value})
    })
  }

  render() {
    let {users} = this.state;
    return (
      <div>
        {
          users.map(user => (
            <div>
              <h2>Name: {user.name}</h2>
              <button onClick={() => {
                this.props.history.push(`/users/${user.id}`)
              }}>My Info
              </button>
              <hr/>
            </div>
          ))
        }
      </div>
    );
  }
}

export default UserList;