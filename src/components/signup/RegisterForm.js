import React from 'react';
import { Field, reduxForm } from 'redux-form';
import RenderField from '../common/RenderField';

const validate = values => {
    const errors = {};
    if(!values.firstName) {
        errors.firstName = 'Required'
    } else if (values.firstName.length < 2) {
        errors.firstName = "Must be 2 characters or more"
    }
    if (!values.email) {
        errors.email = 'Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address'
    }
    if(!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 6) {
        errors.password = "Must be 6 characters or more"
    }
    if(!values.passwordConfirmation) {
        errors.passwordConfirmation = 'Required'
    } else if (values.passwordConfirmation !== values.password) {
        errors.passwordConfirmation = "Password and Confirm password must match"
    }
    return errors;
}

let RegisterForm = props => {
    const { handleSubmit, pristine, submitting } = props;
    return (
        <form className="block-login" onSubmit={handleSubmit}>
            <h2 className="title24 title-form-account">Register</h2>
            {props.error &&
                <p><big><span className="required"><i className="fa fa-times"></i> &nbsp;{props.error}</span></big></p>
            }
            <Field
                name="email"
                type="email"
                component={RenderField}
                label="Email"
            />
            <Field
                name="firstName"
                type="text"
                component={RenderField}
                label="First name"
            />
            <Field
                name="password"
                type="password"
                component={RenderField}
                label="Password"
            />
            <Field
                name="passwordConfirmation"
                type="password"
                component={RenderField}
                label="Repeat password"
            />
            <p>
                <button type="submit" className="register-button" disabled={submitting}>Register</button>
            </p>
        </form>
    );
}

RegisterForm = reduxForm({
    form: 'register',
    validate
})(RegisterForm)

export default RegisterForm;
