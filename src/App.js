import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import ShopRoute from './components/frontend/routes/ShopRoute';
import AuthRoute from './components/frontend/routes/AuthRoute';
import HomePage from './components/frontend/home/HomePage';
import LoginPage from './components/frontend/login/LoginPage';
import RegisterPage from './components/frontend/signup/RegisterPage';
import ResetPasswordPage from './components/frontend/accountmgt/ResetPasswordPage';
import ConfirmationPage from './components/frontend/accountmgt/ConfirmationPage';

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
