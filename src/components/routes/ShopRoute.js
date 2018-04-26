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

const ShopRoute = ({component: Component, ...rest}) => (
    <Route {...rest}
        render={props =>
            (() => {
                return (
                    <div className="wrap">
                        <div id="header">
                            <div className="header">
                                <TopHeader />
                                <MainHeader />
                                <TopMenu />
                            </div>
                        </div>
                        <div id="content">
                            <div className="container">
                                <LeftMenu />
                                <Component {...props} />
                            </div>
                        </div>
                        <div id="footer">
                            <Footer />
                        </div>
                    </div>
                )
            })()
        }
    />
);

ShopRoute.propTypes = {
    component: PropTypes.func.isRequired
};

export default ShopRoute;
