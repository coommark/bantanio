import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import RenderField from '../common/RenderField';

const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Email cannot be empty'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address'
    }
    if(!values.password) {
        errors.password = 'Password is required'
    } else if (values.password.length < 6) {
        errors.password = "Password must be 6 characters or more"
    }
    return errors;
}

let LoginForm = props => {
    const { handleSubmit, pristine, submitting } = props;
    return (
        <form className="block-login" onSubmit={handleSubmit}>
            <h2 className="title24 title-form-account">Login</h2>
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
                name="password"
                type="password"
                component={RenderField}
                label="Password"
            />
            <p>
                <button type="submit" className="register-button" disabled={submitting}>Login</button>
            </p>
            <div className="table create-account">
				<div className="text-left">
				</div>
				<div className="text-right">
					<Link to="/reset_password" className="color">Forgot your password?</Link>
				</div>
			</div>
        </form>
    );
}

LoginForm = reduxForm({
    form: 'login',
    validate
})(LoginForm)

export default LoginForm;
