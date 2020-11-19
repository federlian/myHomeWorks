import React, {Component} from 'react';

class Post extends Component {
    render() {
        let {id, title, body} = this.props.data;
        return (
            <div>
                {id} - {title} - {body}
            </div>
        );
    }
}

export default Post;