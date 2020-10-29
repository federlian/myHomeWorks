import React, {Component} from 'react';

class User extends Component {
    render() {

        let {name, age, status} = this.props.currentUser;
        return (
            <div>
                <p>{name} - {age} - {status.toString()}</p>
            </div>
        );
    }
}

export default User;