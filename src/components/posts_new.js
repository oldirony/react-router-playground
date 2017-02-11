import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions'
import {Link, PropTypes} from 'react-router';

class PostsNew extends Component {

    static contextTypes = {
        router : PropTypes.object
    };

    onSubmit(props) {
        this.props.createPost(props)
            .then(() => {
                this.context.router.push('/');
            });
    }

    render() {
        const { fields : {title, categories, content }, handleSubmit } = this.props;

        return <form className="form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <h3>Create a new post</h3>
            <div className={`form-group ${title.touched && title.error ? 'has-danger' : ''}`}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" className="form-control" {...title} />
                <div className="text-help">
                    {title.touched ? title.error : ''}
                </div>
            </div>
            <div className={`form-group ${categories.touched && categories.error ? 'has-danger' : ''}`}>
                <label htmlFor="categories">Categories</label>
                <input type="text" id="categories" className="form-control" {...categories} />
                <div className="text-help">
                    {categories.touched ? categories.error : ''}
                </div>
            </div>
            <div className={`form-group ${content.touched && content.error ? 'has-danger' : ''}`}>
                <label htmlFor="content">Content</label>
                <textarea className="form-control" id="content" {...content}/>
                <div className="text-help">
                    {content.touched ? content.error : ''}
                </div>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
    }
}

function validate(values){
    const error = {};

    if(!values.title){
        error.title = "Enter a title";
    }
    if(!values.categories){
        error.categories = "Enter a categories";
    }
    if(!values.content){
        error.content = "Enter a content";
    }

    return error;
}


export default reduxForm({
        form: 'PostsNewForm',
        fields : ['title', 'categories', 'content'],
        validate
    }, null, {createPost})(PostsNew);
