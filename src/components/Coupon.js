import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PageLayout from './../layouts/PageLayout'
import CouponForm from './CouponForm'
import CouponList from './CouponList'

class Coupon extends Component {
    componentWillMount() {
        const { fetchCoupon } = this.props
        fetchCoupon()
    }

    render() {
        let {
            Coupon,
            addCoupon,
            updateCoupon
        } = this.props
    
        return (
            <PageLayout>
                <CouponForm
                    onSubmit={addCoupon}
                    isStartAdd={Coupon.isStartAdd}
                    isSuccessAdd={Coupon.isSuccessAdd}                
                    isFailureAdd={Coupon.isFailureAdd}
                    updateCoupon={updateCoupon}
                />
                <CouponList
                    couponList={Coupon.coupons}
                />
            </PageLayout>
        )
    }
}

Coupon.propTypes = {
    addCoupon: PropTypes.func.isRequired,
    updateCoupon: PropTypes.func.isRequired,
}

export default Coupon