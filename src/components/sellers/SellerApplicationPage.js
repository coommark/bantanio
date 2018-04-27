import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sellerRegister } from '../../actions/sellerActions';


class SellerApplicationPage extends React.Component {
    state = { loading: false }

    componentDidMount() {
        if (!this.props.isAuthenticated) {
            const location = {
                pathname: '/login',
                state: {
                    from: {pathname: '/seller'},
                    message: "Login to become a seller"
                }
            }
            this.props.history.push(location);
        }
        else {
            console.log("Aauthenticated")
        }
    }
    render() {
        return (
            <div>
                <p>Apply here</p>
            </div>
        )
    }
}


SellerApplicationPage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    sellerRegister: PropTypes.func.isRequired
}

function mapStateToProps(state){
    return {
        isAuthenticated: !!state.authReducer.token
    }
}

export default connect(mapStateToProps, {sellerRegister})(SellerApplicationPage);
