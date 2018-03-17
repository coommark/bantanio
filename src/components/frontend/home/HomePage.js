import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../../actions/authActions';

const HomePage = ({ isAuthenticated, logout })  => (
    <div>
        
    </div>
);

HomePage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
}

function mapStateToProps(state){
    console.log(state.authReducer)
    return {
        isAuthenticated: !!state.authReducer.token
    }
}

export default connect(mapStateToProps, { logout: actions.logout })(HomePage);
