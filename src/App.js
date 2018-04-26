import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import ShopRoute from './components/routes/ShopRoute';
import AuthRoute from './components/routes/AuthRoute';

import HomePage from './components/home/HomePage';
import LoginPage from './components/login/LoginPage';
import RegisterPage from './components/signup/RegisterPage';
import ResetPasswordPage from './components/accountmgt/ResetPasswordPage';
import ConfirmationPage from './components/accountmgt/ConfirmationPage';

const App = ({ location }) =>
    <div>
        <ShopRoute location={location} path="/" exact component={HomePage} />
        <AuthRoute location={location} path="/login" exact component={LoginPage} />
        <AuthRoute location={location} path="/register" exact component={RegisterPage} />
        <AuthRoute location={location} path="/reset_password" exact component={ResetPasswordPage} />
        <AuthRoute location={location} path="/confirmation/:token" exact component={ConfirmationPage} />
    </div>

App.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired
};

export default App;
