import React, {Component} from 'react';

class User extends Component {
    render() {
        let {id, name, username, email} = this.props.data;
        console.log(this.props.data);
        return (
            <div>
                {id} - {name} - {username} - {email} <br/>
                <button>
                    Show posts
                </button>
            </div>
        );
    }
}

export default User;