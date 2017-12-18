import React from 'react'
import PropTypes from 'prop-types'
import PageLayout from './../layouts/PageLayout'
import CouponForm from './CouponForm'

const Coupon = (props) => {
    let {
        addCoupon,
        updateCoupon
    } = props

    return (
        <PageLayout>
            <CouponForm 
                onSubmit={addCoupon}
                updateCoupon={updateCoupon}
            />
        </PageLayout>
    )
}

Coupon.propTypes = {
    addCoupon: PropTypes.func.isRequired,
    updateCoupon: PropTypes.func.isRequired,
}

export default Coupon