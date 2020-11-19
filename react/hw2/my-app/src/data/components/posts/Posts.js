import React, {Component} from 'react';
import {ApiServicePosts} from "../../services/posts/ApiServicePosts";
import Post from "../post/Post";

class Posts extends Component {
    api = new ApiServicePosts();

    state = {posts: []};

    async componentDidMount() {
        this.setState({posts: await this.api.getPosts()});
    }

    render() {
        return (
            <div>
                {
                    this.state.posts.map(post => (<Post data={post} key={post.id}/>))
                }
            </div>
        );
    }
}

export default Posts;