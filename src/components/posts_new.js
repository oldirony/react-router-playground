import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            category: '',
            content: ''
        }
    }

    render() {
        return <form action="">
            <h3>Create a new post</h3>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" className="form-control"/>
            </div>
            <div className="form-group">
                <label htmlFor="category">Categories</label>
                <input type="text" id="category" className="form-control"/>
            </div>
            <div className="form-group">
                <label htmlFor="content">Title</label>
                <textarea className="form-control" id="content"/>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    }
}


export default reduxForm({
    form: 'PostsNewForm',
    fields : ['name', 'category', 'content']
})(PostsNew);
