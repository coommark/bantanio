import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BarLoader } from 'react-spinners';

class ConfirmationPage extends React.Component {
    render() {
        return (
            <div>
            <BarLoader
              color={'#F50AAE'}
              width={100}
              height={4}
              loading={true}
            />
            </div>
        );
    }
}

export default ConfirmationPage;
