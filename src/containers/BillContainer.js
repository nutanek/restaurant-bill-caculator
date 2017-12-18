import React from 'react'
import { connect } from 'react-redux'
import { addCoupon, removeCoupon, setBillTotal } from './../actions/BillActions'
import Bill from './../components/Bill'

const BillContainer = props => <Bill {...props} />

const mapStateToProps = (state) => {
    const { Bill } = state
    return {
        Bill
    }
}

export default connect(mapStateToProps, {
    addCoupon,
    removeCoupon,
    setBillTotal
})(BillContainer)