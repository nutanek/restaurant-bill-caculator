import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCustNum, addCoupon, removeCoupon } from './../actions/BillActions'
import Bill from './../components/Bill'

const BillContainer = props => <Bill {...props} />;

const mapStateToProps = (state) => {
    const { Bill } = state
    return {
        Bill
    }
}

export default connect(mapStateToProps, {
    getCustNum,
    addCoupon,
    removeCoupon
})(BillContainer);