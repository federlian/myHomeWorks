import React, {Component} from 'react';
import {CommentsService} from "../../services/CommentsService";

class CommentList extends Component {

  state = {
    comments: [],
  }

  _commentsService = new CommentsService();

  componentDidMount() {
    this._commentsService.getComments().then(value => {
      this.setState({comments: value})
    })
  }

  render() {
    let {comments} = this.state;
    return (
      <div>
        {
          comments.map(comment => (
            <div>
              <p>Comment: {comment.name}</p>
              <button onClick={() => this.props.history.push(`comments/${comment.id}`)}>Comments Info</button>
              <hr/>
            </div>
          ))
        }
      </div>
    );
  }
}

export default CommentList;