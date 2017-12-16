import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBillForm } from './../actions/BillActions'
import Bill from './../components/Bill'

const BillContainer = props => <Bill {...props} />;

const mapStateToProps = (state) => {
    const { bill } = state
    return {
        bill
    }
}

export default connect(mapStateToProps, {})(BillContainer);