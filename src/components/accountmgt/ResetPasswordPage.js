import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SubmissionError } from 'redux-form';
import LoadingOverlay from 'react-loading-overlay';
import ResetPasswordForm from './ResetPasswordForm';
import { forgotPasswordRequest } from '../../actions/authActions';

class ResetPasswordPage extends React.Component {

    state = { loading: false }

    submit = values => {
        this.setState({loading: true })
        return this.props.forgotPasswordRequest(values.email)
            .then(() => this.setState({loading: false}))
            .catch(error => {
                this.setState({loading: false })
                throw new SubmissionError(error.response.data.errors);
            } );
        }
    render() {
        return (
            <div className="content-page woocommerce">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="title-shop-page">My Account</h2>
                            <div className="register-content-box">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6 col-ms-12">
                                        <div className="check-billing">
                                            <div className="form-my-account">
                                                <LoadingOverlay
                                                        active={this.state.loading}
                                                        animate
                                                        spinner
                                                        text='Requesting password reset... please wait'
                                                    >
                                                    <ResetPasswordForm onSubmit={this.submit} />
                                                </LoadingOverlay>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-ms-12">
                                        <div className="check-address">
                                            <div className="form-my-account check-register">
                                                <h2 className="title24 title-form-account">Steps to reset your password</h2>
                                                <p className="desc">
                                                    <ol>
                                                      <li>You will be sent a password reset email</li>
                                                      <li>The email may go into your junk/spam folder, please check</li>
                                                      <li>Click the link to reset your password</li>
                                                    </ol>

                                                </p>
                                                <Link to="/login" className="shop-button login-to-register">Login here</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ResetPasswordPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    forgotPasswordRequest: PropTypes.func.isRequired
};

export default connect(null, { forgotPasswordRequest })(ResetPasswordPage);
