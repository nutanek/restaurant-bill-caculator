import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBillForm, getCustNum } from './../actions/BillActions'
import Bill from './../components/Bill'

const BillContainer = props => <Bill {...props} />;

const mapStateToProps = (state) => {
    const { Bill } = state
    return {
        Bill
    }
}

export default connect(mapStateToProps, {
    getCustNum
})(BillContainer);