import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends Component {

  componentDidMount = () => {
    this.props.fetchPosts();
  }

  renderPosts = () => {
    console.log(this.props.posts);
    
    if (this.props.posts.length === 0) 
      return <div>Loading...</div>;
    
    return this.props.posts.map( post => {
      return (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      );
    });
  }

  render () {
    return (
      <div>
        {this.renderPosts()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
