import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
    componentWillMount(){
        this.props.fetchPost(this.props.params.id);
    }

    render(){
        if(!this.props.post){
            return <div>hey</div>;
        }
        return <div>
            <h3>{this.props.post.title}</h3>
            <p>{this.props.post.content}</p>
        </div>
    }
}

function mapStateToProps(state){
    return {
        post : state.posts.post
    }
}

export default connect(mapStateToProps, {fetchPost})(PostsShow)