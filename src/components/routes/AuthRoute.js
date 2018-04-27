import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import '../../include/frontend';
import TopHeader from '../navigation/TopHeader';
import MainHeader from '../navigation/MainHeader';
import TopMenu from '../navigation/TopMenu';
import LeftMenu from '../navigation/LeftMenu';
import Footer from '../navigation/Footer';

const AuthRoute = ({component: Component, ...rest}) => (
    <Route {...rest}
        render={props =>
            (() => {
                return (
                    <div className="wrap">
                        <div id="content">
                            <Component {...props} />
                        </div>                        
                    </div>
                )
            })()
        }
    />
);

AuthRoute.propTypes = {
    component: PropTypes.func.isRequired
};

export default AuthRoute;
