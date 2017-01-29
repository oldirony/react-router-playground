import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/';

class PostIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        return <ul>
            <li>post 1</li>
            <li>post 2</li>
        </ul>
    }
}

export default connect(null, { fetchPosts })(PostIndex);