import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SubmissionError } from 'redux-form';
import LoadingOverlay from 'react-loading-overlay';
import LoginForm from './LoginForm';
import { login } from '../../actions/authActions';

class LoginPage extends React.Component {

    state = { loading: false }

    submit = values => {
        this.setState({loading: true })
        return this.props.login(values)
        .then(() => {
            var {from} = this.props.location.state || {from: {pathname: '/'}}            
            this.props.history.push(from)
        })
         .catch(error => {
            this.setState({loading: false })
            throw new SubmissionError(error.response.data.errors);
        });
    }
    render() {
        let message = "My Account";

        if(typeof this.props.location.state != "undefined" && this.props.location.state.hasOwnProperty('message')) {
            message = this.props.location.state.message;
        }

        return (
            <div className="content-page woocommerce">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="title-shop-page">
                                {message}
                            </h2>
                            <div className="register-content-box">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6 col-ms-12">
                                        <div className="check-billing">
                                            <div className="form-my-account">
                                                <LoadingOverlay
                                                        active={this.state.loading}
                                                        animate
                                                        spinner
                                                        text='Login you in... please wait'
                                                    >
                                                        <LoginForm onSubmit={this.submit} />
                                                </LoadingOverlay>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-ms-12">
                                        <div className="check-address">
                                            <div className="form-my-account check-register text-center">
                                                <h2 className="title24 title-form-account">Not yet registered?</h2>
                                                <p className="desc">Registering for this site allows you to access your order status and history. Just fill in the fields below, and we’ll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.</p>
                                                <Link to="/register" className="shop-button login-to-register">Register here</Link>
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

LoginPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
};

export default connect(null, { login })(LoginPage);
