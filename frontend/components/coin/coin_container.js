import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import coinDetail from './coin_detail';

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(coinDetail)