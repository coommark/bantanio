import React from 'react';
import { Field, reduxForm } from 'redux-form';
import RenderField from '../../common/RenderField';

const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Email cannot be empty'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address'
    }
    return errors;
}

let ResetPasswordForm = props => {
    const { handleSubmit, pristine, submitting, error } = props;
    return (
        <form className="block-login" onSubmit={handleSubmit}>
            <h2 className="title24 title-form-account">Reset password</h2>
            {props.error &&
                <p><big><span className="required"><i className="fa fa-times"></i> &nbsp;{props.error}</span></big></p>                    
            }
            <Field
                name="email"
                type="email"
                component={RenderField}
                label="Email"
            />
            <p>
                <button type="submit" className="register-button" disabled={submitting}>Reset password</button>
            </p>
        </form>
    );
}

ResetPasswordForm = reduxForm({
    form: 'reset_password',
    validate
})(ResetPasswordForm)

export default ResetPasswordForm;
