import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addItem } from '../actions';


class AddItem extends Component {
    handleAddItem = async (values) => {
        console.log('handle add item values: ', values);
        await this.props.addItem(values);
        //this.props.reset
        this.props.history.push('/');
    }

    renderInput({ label, input, meta: { touched, error } }) {
        return (
            <div className="row">
                <div className="col s12">
                    <label>{label}</label>
                    <input {...input} type="text" />
                    <p className="red-text text-darken-2">{touched && error}</p>
                </div>
            </div>
        )
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div>
                <h1 className="center">Add Item</h1>
                <div className="row">
                    <div className="col s12 right-align">
                        <Link to="/" className="btn blue darken-2">Back to List</Link>
                    </div>
                </div>
                <div className="row">
                    <form onSubmit={handleSubmit(this.handleAddItem)} className="col s12 m8 offset-m2">
                        <Field name="title" label="Title" component={this.renderInput} />
                        <Field name="details" label="Details" component={this.renderInput} />
                        <div className="row">
                            <div className="col s12 right-align">
                                <button className="btn blue lighten-1">Add Item</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

function validate(values) {
    const { title, details } = values;
    const errors = {};

    if (!title) {
        errors.title = "Please enter a todo title"
    }

    if (!details) {
        errors.details = "Please enter todo details"
    }

    return errors;
}

AddItem = reduxForm({
    form: 'add-item',
    validate: validate
})(AddItem);

export default connect(null, { addItem: addItem })(AddItem);