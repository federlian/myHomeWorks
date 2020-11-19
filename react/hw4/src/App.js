import React from "react";
import {NavLink, Route, Switch} from "react-router-dom";
import './App.css';
import User from "./components/User/User";
import UserList from "./components/User/UserList";
import Post from "./components/Post/Post";
import PostList from "./components/Post/PostList";
import Comment from "./components/Comment/Comment";
import CommentList from "./components/Comment/CommentList";

function App() {
  return (
    <div>
      <div className="menu">
        <button><NavLink exact to='/'/>Home</button>
        <button><NavLink to='/users'/>Users</button>
        <button><NavLink to='/posts'/>Posts</button>
        <button><NavLink to='/comments'/>Comments</button>
      </div>
      <div className="content">
        <Switch>
          <Route path='/users/:id' component={User}/>
          <Route path='/users' component={UserList}/>
          <Route path='/posts/:id' component={Post}/>
          <Route path='/posts' component={PostList}/>
          <Route path='/comments/:id' component={Comment}/>
          <Route path='/comments/' component={CommentList}/>
          <Route exact path='/' render={() => <h2>HI HI HI</h2>}/>
          <Route render={() => <h1>404</h1>}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
