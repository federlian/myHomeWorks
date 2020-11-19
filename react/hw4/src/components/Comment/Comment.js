import React, {Component} from 'react';
import {CommentsService} from "../../services/CommentsService";

class Comment extends Component {

  state = {
    comment: {},
  }

  _commentService = new CommentsService();

  componentDidMount() {
    const id = this.props.match.params.id;
    this._commentService.getCommentById(id).then(value => {
      this.setState({comment: value})
    })
  }

  render() {
    let {comment} = this.state;
    return (
      <div>
        {
          comment && <div>
            <p>PostID: {comment.postId}</p>
            <p>CommentID: {comment.id}</p>
            <p>Name: {comment.name}</p>
            <p>Email: {comment.email}</p>
            <p>Comment: {comment.body}</p>
          </div>
        }
      </div>
    );
  }
}

export default Comment;