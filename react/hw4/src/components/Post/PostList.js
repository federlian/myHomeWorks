import React, {Component} from 'react';
import {PostsService} from "../../services/PostsService";

class PostList extends Component {

  state = {
    posts: [],
  }

  _postsService = new PostsService();

  componentDidMount() {
    this._postsService.getPosts().then(value => {
      this.setState({posts: value})
    })
  }

  render() {
    let {posts} = this.state;
    return (
      <div>
        {
          posts.map(post => (
            <div>
              {post.title}
              <hr/>
              <button onClick={() => this.props.history.push(`/posts/${post.id}`)}>Post</button>
            </div>
          ))
        }
      </div>
    );
  }
}

export default PostList;