import React, {Component} from 'react';
import {PostsService} from "../../services/PostsService";

class Post extends Component {

  state = {
    post: {}
  }

  _postService = new PostsService();

  componentDidMount() {
    const id = this.props.match.params.id;
    this._postService.getPostById(id).then(value => {
      this.setState({post: value})
    })
  }

  render() {
    let {post} = this.state;
    return (
      <div>
        {
          post && <div>
            <p>UserID: {post.userId}</p>
            <p>PostID: {post.id}</p>
            <p>Title: {post.title}</p>
            <p>Body: {post.body}</p>
          </div>
        }
      </div>
    );
  }
}

export default Post;