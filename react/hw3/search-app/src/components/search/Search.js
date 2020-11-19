import React, {Component} from 'react';
import {UserService} from "../../services/UserService";
import Users from "../user/Users";

class Search extends Component {

  _userService = new UserService();

  state = {
    names: [],
    searchTerm: ''
  };

  async componentDidMount() {
    this.setState({names: await this._userService.getAllUsers()})
  }

  editSearchTerm = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  dynamicSearch = () => {
    return this.state.names.filter(name => name.name.includes(this.state.searchTerm.toLowerCase()))
  }

  render() {
    return (
      <div>
        <h1>Search User</h1>
        <input type="text" value={this.state.searchTerm} onChange={this.editSearchTerm}/>
        <hr/>
        <Users names={this.dynamicSearch()}/>
      </div>
    );
  }

}

export default Search;