import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions/authActions';

const TopHeader = ({ isAuthenticated, logout }) => (
    <div className="top-header top-header4">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="account-login">
                        { isAuthenticated ? (
                            <div>
                                <a href="#">My Account</a>
                                <a href="#" onClick={() => logout()}>Logout</a>
                                <Link to="/seller">Become a Seller</Link>
                            </div>
                            ) : (
                            <div>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>
                                <Link to="/seller">Become a Seller</Link>
                            </div>
                        )}
                    </div>
                    <div className="col-md-6 col-sm-6 hidden-xs">
                    </div>
                </div>
            </div>
        </div>
    </div>
);

TopHeader.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
}

function mapStateToProps(state){
    return {
        isAuthenticated: !!state.authReducer.token
    }
}

export default connect(mapStateToProps, { logout: actions.logout })(TopHeader);
