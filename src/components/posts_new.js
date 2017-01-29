import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {

    render() {
        const { fields : {title, categories, content }, onSubmit } = this.props;

        return <form onSubmit={onSubmit}>
            <h3>Create a new post</h3>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" className="form-control" {...title} />
            </div>
            <div className="form-group">
                <label htmlFor="categories">Categories</label>
                <input type="text" id="categories" className="form-control" {...categories} />
            </div>
            <div className="form-group">
                <label htmlFor="content">Title</label>
                <textarea className="form-control" id="content" {...content}/>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    }
}


export default reduxForm({
    form: 'PostsNewForm',
    fields : ['title', 'categories', 'content']
})(PostsNew);
