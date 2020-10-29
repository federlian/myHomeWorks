import React, {Component} from 'react';
import {users} from '../../data/data'
import User from "../user/User";

class UserList extends Component {
    render() {

        return (
            <div>
                {
                    users.map((userItem, index) => (<User currentUser={userItem} key={index}/>))
                }
            </div>
        );
    }
}

export default UserList;