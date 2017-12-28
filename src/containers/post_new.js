import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';

class PostNew extends Component {       

    renderTextField(field){

        //destructuring - get also nested properites like error or touched from field.meta
        const {meta: {touched, error}} = field;

        const className = `form-group ${touched && error ? 'has-danger':''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input 
                    {...field.input} //field objec contains props with events, 
                                     // ... connects all this with field.input 
                                     //like onChange={field.input.onChange}
                    type="text"
                    className="form-control"
                />   
                <div className="text-help">
                    {touched ? error : '' }
                </div>                 
            </div>
        );
    }    

    onSubmit(values) {
        console.log(values);
    }

    render(){
        const {handleSubmit} = this.props; // we get the handleSubmit prop that redux-forms introduce to our component

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                    label="Title" // we can define properties
                    name="title" //piece of state
                    component={this.renderTextField}
                />                
                <Field 
                    label="Categories"
                    name="categories"
                    component={this.renderTextField}
                />
                <Field 
                    label="Post Content"
                    name="content"
                    component={this.renderTextField}
                />
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};
    
    //validate inputs
    if(!values.title || values.title.length < 3){
        errors.title = 'Enter a title that is at least 3 characters';
    }
    if(!values.categories){
        errors.categories = 'Enter some categories';
    }
    if(!values.content){
        errors.content = 'Enter some content';
    }

    return errors; //return empty oblect the form is fine to submit
}

// pass a function with the configuration options
export default reduxForm({
    form: 'PostNewForm', //name of the form, has to be unique
    validate //validate: validate
})(PostNew);